import React from 'react';

const MovieCard = ({ singularMovie }) => {

    return (
        <div className="movie">
            <div>
                <p>{singularMovie.Year}</p>
            </div>

            <div>
                <img src={singularMovie.Poster !== 'N/A' ? singularMovie.Poster : 'https://via.placeholder.com/400'} alt={singularMovie.Title} />
            </div>
            <div>
                <span>{singularMovie.Type}</span>
                <h3>{singularMovie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;