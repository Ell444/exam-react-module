import { useEffect, useState } from "react"
import SearchBar from "./SearchBar";
import PersonCard from "./PersonCard";
const apiKey = import.meta.env.VITE_API_KEY;

export default () => {

    const [searchPerson, setSearchPerson] = useState([]);
    const [error, setError] = useState()

    const search = async (searchValue) => {
        const searchParams = new URLSearchParams({
            api_key: apiKey,
            query: searchValue
        })
        const response = await fetch(`https://api.themoviedb.org/3/search/person?${searchParams.toString()}`);
        const { results } = await response.json();
        setSearchPerson(results);
    }


    return (
        <div>
            <h1 className="search-title">Who are you searching for?</h1>
            <SearchBar onSearch={search} />
            {error && <div className="error">{error}</div>}
            <div>
                {searchPerson.map(p => (
                    <div className="search-page-actors">
                        <PersonCard
                            key={p.id}
                            imagePath={`https://image.tmdb.org/t/p/w500/${p.profile_path}`}
                            name={p.name}
                            sex={p.gender === 2 ? 'Male' : 'Female'}
                            occupation={p.known_for_department}
                            popularity={p.popularity}
                            works={p.known_for.map((work, i) =>
                                <ul key={`ul${i}`}>
                                    <li className="works-wrapper">{work.title}</li>
                                </ul>)}
                        />
                    </div>

                ))}
            </div>


        </div >
    )

}
