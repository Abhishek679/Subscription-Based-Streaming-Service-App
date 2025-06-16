import React from 'react';
import { BACKGROUND_IMG } from '../utils/constant';
import GptSearchResultMovies from './GptSearchResultMovies';

const GptMoviesSuggestions = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img
          className="w-screen h-screen"
          src={BACKGROUND_IMG}
          alt="Background Img"
          aria-hidden="true"
        />
      </div>
      <div className='pt-[20%]'>
        <GptSearchResultMovies />
      </div>
    </div>
  )
}

export default GptMoviesSuggestions;
