import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

const renderActors = () => {
  return actors.map(actor => {
    return (
      <div>
        <h3>{actor.name}</h3>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
}

export default Actors;
