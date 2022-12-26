import React from "react";
import PropTypes from "prop-types";

function Movie({id, title, year, summary, poster, genres}){
    return (

        <div class="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="moive_data">
                <h3 className="movie__title"> {title} </h3>
                <h5 className="movie__year"> {year} </h5>
                <p className="movie_summary"> {summary} </p>
                <ul className="genres">
                    {genres.map(genre=>(<li className="genres__genre">{genre}</li>))}
                </ul>
            </div>
        </div>
    );
}
Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;