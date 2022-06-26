import React from 'react';
// import Favorites from './Favorite';
import { FaHeart , FaRegHeart} from "react-icons/fa";
import Like from './Like'

const MovieCard = ({movie}) => {
    return(
      <div className="movie">
        <div>
            <p>{movie.Year}</p>
      
        </div>
        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
            <Like ></Like>

        </div>

        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Released}</h3>
            <h3>{movie.Title}</h3>

        </div>
      </div>    
    )
}

export default MovieCard;