import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useHighlightMovie = (movieId) => {
    const dispatch = useDispatch();
  
    const getMovieVideos = async () => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
      const json = await data.json();
      const filterTrailer = json['results'].filter((item) => item.type === "Trailer");
      const tailer = json['results'].length ? filterTrailer[0] : json['results'];
      dispatch(addTrailerVideo(tailer));
    }
    useEffect(() =>{
      getMovieVideos();
    }, []);
}

export default useHighlightMovie;