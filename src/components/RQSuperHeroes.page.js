import { useQuery } from "react-query"
import axios from "axios"
import { useState } from "react"

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes")
}

export const RQSuperHeroesPage = () => {
    // const [intervalTime, setIntervalTime] = useState(3000)

    // const onSuccess = (data) => {
    //     if (data?.data.length === 4) {
    //         setIntervalTime(0)
    //     }
    //     console.log(
    //         "Perform side effect after data fetching", data
    //     )
    // }

    // const onError = (data) => {
    //     setIntervalTime(0)
    //     console.log(
    //         "Perform side effect after encountering error", data
    //     )
    // }

    const { isLoading, data, isError, error, isFetching, } = useQuery("super-heroes", fetchSuperHeroes, {
        // onError, onSuccess,
        // refetchInterval: intervalTime
        select: (data) => {
            const superheroNames = data.data.map(hero => hero.name)
            return superheroNames
        }
    })
    // default cache time is 5 minutes and this 5 minutes is good 
    // default stale time is 0s
    // default refetchOnMount = true
    // refetchOnWindowFocus
    // refetchInterval
    // refetchIntervalInBackground
    console.log({ isLoading, isFetching })

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>React Query Super Heroes Page</h2>
            {/* {data?.data.map(hero => {
                return <div key={hero.name}>{hero.name}</div>
            })} */}
            {data.map(heroName => {
                return <div key={heroName}>{heroName}</div>
            })}
        </>
    )
}