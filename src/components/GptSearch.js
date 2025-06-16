import React, { useState, useRef } from "react";
import { toggleGptSearchView, addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";

const GptSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
    dispatch(toggleGptSearchView());
  };
  // Search Movie
    const searchMovie = async (movie) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const jsonResult = await data.json();
      return jsonResult.results;
    };
  const handleInputChange = async (e) => {
    setQuery(e.target.value);
    // handle the enter key and Make an API call to GPT and get the result
    if (e.key === "Enter") {
    //   const gptQuery =
    //     "Act as a Movie Recommendation system and suggest some movies for the query :" +
    //     e.target.value +
    //     ". only give give names of 5 movies, comma seperated like the example result given ahead Result: Gadar, Don, Sholay, Golmal";
    //   const gptResult = await openai.chat.completions.create({
    //     model: "gpt-3.5-turbo",
    //     messages: [{ role: "user", content: gptQuery }],
    //   });
    const tmdbResult = await searchMovie(e.target.value);
    dispatch(addGptMovieResult(tmdbResult));
    }
  };

  return (
    <div className="flex items-center border border-gray-300 px-4 py-2 my-6 bg-black w-full">
      {/* Search Icon SVG */}
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
        />
      </svg>

      {/* Input */}
      <input
        type="text"
        ref={inputRef}
        value={query}
        onKeyDown={handleInputChange}
        onChange={(e) => handleInputChange(e)}
        placeholder="Search..."
        className="flex-1 px-2 py-1 focus:outline-none text-white bg-black"
      />

      {/* Clear (X) Icon SVG */}
      {query && (
        <button onClick={handleClear} className="focus:outline-none">
          <svg
            className="w-5 h-5 text-white hover:text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default GptSearch;
