import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes")
}

export const RQSuperHeroesPage = () => {
    const { isLoading, data, isError, error, isFetching } = useQuery("super-heroes", fetchSuperHeroes, { refetchOnMount: true, refetchOnWindowFocus: true })
    // default cache time is 5 minutes and this 5 minutes is good 
    // default stale time is 0s
    // default refetchOnMount = true
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
            {data?.data.map(hero => {
                return <div key={hero.name}>{hero.name}</div>
            })}
        </>
    )
}