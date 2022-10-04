import React from "react";
import { actors } from "../data";

function Actors() {
  const allActors = actors.map(eachActor => {
    return (
      <div key={eachActor.name}>
        <h2>{eachActor.name}</h2>
        <p>Movies:</p>
        <ul>{eachActor.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {allActors}
    </div>
  )
}

export default Actors;
