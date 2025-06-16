import React from 'react';
import { IMG_CDN_URL } from "./../utils/constant";

const MovieCard = ({movie}) => {
  return (
    <div className='w-48 pr-4'>
      <img alt='' src={IMG_CDN_URL + movie.poster_path} />
    </div>
  )
}

export default MovieCard;
