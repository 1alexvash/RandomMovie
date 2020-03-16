import React, { useState } from "react";
import "./scss/main.css";

import Preloader from "./components/Preloader/Preloader";
import Description from "./components/Description/Description";
import Movie from "./components/Movie/Movie";
import Spinner from "./components/Spinner/Spinner";

import axios from "axios";

const API_KEY = "0ace63cfa75b0924b1853cf7b0fe5d14";

const language = "en-US";

const App = () => {
  const [randomMovie, setRandomMovie] = useState({});

  const [loading, setLoading] = useState(false);

  const [genre, setGenre] = useState("all");

  const getMovie = async () => {
    setRandomMovie({});
    setLoading(true);
    console.log("=== STARTED LOADING ===");

    let randomPage = Math.ceil(Math.random() * 500);

    const result = await axios(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${language}&sort_by=popularity.desc&page=${randomPage}${
        genre !== "all" ? `&with_genres=${genre}` : ""
      }`
    );

    console.log("REQUEST RESULTS");
    console.log(result);

    const data = result.data;
    let randomMovie = data.results[Math.floor(Math.random() * 20)];
    console.log("Random Movie");
    console.log(randomMovie);
    console.log("=== FINISHED LOADING ===");
    setLoading(false);
    setRandomMovie(randomMovie);

    if (randomMovie.backdrop_path === null) {
      getMovie();
      console.log("searching for a movie with an image");
    }
  };

  return (
    <div className="App">
      <Preloader />
      <Description title={randomMovie.title} loading={loading} />
      {loading ? <Spinner /> : <Movie movie={randomMovie}></Movie>}
      <div className="genre-name">Pick Up a genre:</div>
      <select className="select-genre" onChange={e => setGenre(e.target.value)}>
        <option value="all">All</option>
        <option value="27">Horror</option>
        <option value="35">Comedy</option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="99">Documentary</option>
        <option value="18">Fantasy</option>
        <option value="10749">Romance</option>
        <option value="878">Science Fiction</option>
        <option value="10752">Thriller</option>
      </select>
      <button onClick={getMovie} className="get-movie">
        {randomMovie.title ? "Get Another Movie" : "Get Movie"}
      </button>
    </div>
  );
};

export default App;
