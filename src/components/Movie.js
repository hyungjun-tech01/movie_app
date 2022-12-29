import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// v6에서는 더이상 Link to 를 통해 state/props 전달은 할 수 없다. 따라서 아래 기능은 동작하지 않는다. 
// custom hook 을 만들어서 사용하라고 되어 있는데 , hook 은 아직 공부 못했다. 다음에 공부하게 되면 추가할 예정 

function Movie({id, title, year, summary, poster, genres}){
    return (
    <Link to={{
        pathname:"/movie_detail",
        state:{
            summary,
            title,
            poster,
        }
    }}>
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="moive_data">
                <h3 className="movie__title"> {title} </h3>
                <h5 className="movie__year"> {year} </h5>
                <p className="movie_summary"> {summary.slice(0,140)}... </p>
                <ul className="genres">
                    {genres.map((genre,index)=>(<li key={index} className="genres__genre">{genre}</li>))}
                </ul>
            </div>
        </div>
    </Link>
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