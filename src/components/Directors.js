import React from "react";
import { directors } from "../data";

function Directors() {
  const allDirectors = directors.map(eachDirector => {
    return (
      <div key={eachDirector.name}>
        <h2>{eachDirector.name}</h2>
        <p>Movies:</p>
        <ul>{eachDirector.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  )
}

export default Directors;
