import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes")
}

export const RQSuperHeroesPage = () => {
    const { isLoading, data } = useQuery("super-heroes", fetchSuperHeroes)

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    return (
        <>
            <h2>React Query Super Heroes Page</h2>
            {data?.data.map(hero => {
                return <div>{hero.name}</div>
            })}
        </>
    )
}