import React from "react";
import { movies } from "../data";

function Movies() {
  const allMovies = movies.map(eachMovie => {
    return (
      <div key={eachMovie.title}>
        <h2>Name: {eachMovie.title}</h2>
        <p>Time: {eachMovie.time}</p>
        <p>Genres:</p>
        <ul>{eachMovie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {allMovies}
    </div>
  )
}

export default Movies;
