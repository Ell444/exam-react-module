import { Link } from "react-router-dom";

export default ({ id, name, occupation, sex, popularity, works, imagePath }) => {
    return (
        <Link className="card-link" to={`/person/${id}`}>
            <div className="card">

                <h3 className="title">{name}</h3>
                <figure className="profile-picture">
                    <img src={`https://image.tmdb.org/t/p/w500/${imagePath}`} alt={`Picture of ${name}`} />
                </figure>
                <section className="person-informations">
                    <p><strong>Sex:</strong> {sex}</p>
                    <p><strong>Occupation:</strong>{occupation}</p>
                    <p><strong>Popularity:</strong> {popularity}</p>
                    <h4>Most famous movies</h4>
                    <div>{works[0]}</div>
                </section>

            </div>
        </Link>

    );
};