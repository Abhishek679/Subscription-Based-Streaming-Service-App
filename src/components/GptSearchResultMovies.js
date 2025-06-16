import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptSearchResultMovies = () => {
  const movieResult = useSelector((store) => store.gpt.gptMovie);
  if (!movieResult) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      {/* {movieResult?.map((movie) => ( */}
        <MovieList key={movieResult[0].id} title={movieResult[0].original_title} movies={movieResult} />
      {/* ))} */}
    </div>
  );
};

export default GptSearchResultMovies;
