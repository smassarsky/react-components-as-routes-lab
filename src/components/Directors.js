import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

const renderDirectors = () => {
  return directors.map(director => {
    return (
      <div>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
}

export default Directors
