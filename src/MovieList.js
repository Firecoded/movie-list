import React, { Component } from 'react';
import SingleListItem from './SingleListItem';

class MovieList extends Component {
  render() {
    return (
      <div>
          <h1>MovieList</h1>
          <SingleListItem/>
      </div>
    )
  }
}

export default MovieList;
