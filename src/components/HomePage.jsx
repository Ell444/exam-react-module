import { useState, useEffect } from "react";
import PersonCard from "./PersonCard";
const apiKey = import.meta.env.VITE_API_KEY;


export default () => {

    const [persons, setPersons] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}`)
            .then(response => response.json())
            .then(obj => {
                setPersons(obj.results)
            })
            .catch(error => {
                setError('There was an error. Please try again!');
                console.error(error);
            })
    }, [])


    return (
        <div className="person-wrapper">
            <h1 className="head-title">Popular People Today</h1>
            {error && <div>{error}</div>}
            {!error && <>
                {persons.length === 0 &&
                    <div>Loading...</div>
                }
                {persons.length !== 0 &&
                    <div className="person-list">
                        {persons.map((person) => (
                            <div key={person.id} className="person-card">
                                <PersonCard
                                    key={person.id}
                                    name={person.name}
                                    imagePath={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                                    sex={person.gender === 2 ? 'Male' : 'Female'}
                                    occupation={person.known_for_department}
                                    popularity={person.popularity}
                                    works={person.known_for.map((work, i) =>
                                        <ul>
                                            <li className="works-wrapper">{work.title}</li>
                                        </ul>)}
                                />
                            </div>

                        ))}

                    </div>}
            </>}
        </div>
    );
};