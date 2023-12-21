export default ({ id, name, occupation, sex, popularity, works, imagePath }) => {
    return (
        <div>

            <h3 className="title">{name}</h3>
            <figure className="profile-picture">
                <img src={`https://image.tmdb.org/t/p/w500/${imagePath}`} alt={`Picture of ${name}`} />
            </figure>
            <section className="person-informations">
                <p><strong>Sex:</strong> {sex}</p>
                <p><strong>Occupation:</strong>{occupation}</p>
                <p><strong>Popularity:</strong> {popularity}</p>
                <h4>Most famous movies</h4>
                <div>{works}</div>
            </section>

        </div>
    );
};