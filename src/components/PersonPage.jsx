import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom"
import dayjs from "dayjs";
const apiKey = import.meta.env.VITE_API_KEY;

export default () => {

    const { id } = useParams();
    const [person, setPerson] = useState();

    useEffect(() => {
        const query = new URLSearchParams({
            api_key: apiKey,
        });
        fetch(`https://api.themoviedb.org/3/person/${id}?${query.toString()}`)
            .then(response => response.json())
            .then(obj => {
                setPerson(obj)
                console.log(obj)
            })
            .catch(error => console.error(error))
    }, [id])


    if (!person) {
        return <div className="error">No celebrity was found.</div>
    }

    const birthdate = dayjs(person.birthday);
    const age = dayjs().diff(birthdate, 'year');
    /* Per correttezza, questo l'ho trovato cercando una soluzione su internet e aiutandomi con la guida di day.js */

    return (<>
        {id === undefined ?
            <Navigate to="/" /> /*Not working. :(*/
            :
            <div className="person-page">
                <p><strong>Name: </strong>{person.name}</p>
                <p><strong>Sex:</strong> {person.gender === 2 ? 'Male' : 'Female'}</p>
                <p><strong>Age: </strong>{age} year old</p>
                <p><strong>Profession:</strong> {person.known_for_department}</p>
                <figure>
                    <img src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} alt={`Picture of ${person.name}`} />
                </figure>{person.profile_path}
                <p> <strong>Biography:</strong> {person.biography}</p>
            </div>
        }


    </>)
}