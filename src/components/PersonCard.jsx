export default ({ id, name, occupation, sex, popularity, works, imagePath }) => {
    return (
        <div className="person-card">

            <h3>{name}</h3>
            <figure className="profile-picture">
                <img src={imagePath} alt={`Picture of ${name}`} />
            </figure>
            <section className="person-informations">
                <p>Sex: {sex}</p>
                <p>Occupation:{occupation}</p>
                <p>Popularity: {popularity}</p>
                <h4>Most famous movies</h4>
                <ul>
                    <li>{works}</li>
                </ul>
            </section>

        </div>
    );
};