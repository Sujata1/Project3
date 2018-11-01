import React from 'react';

const SearchResults = props => {
  let results = props.results.map(article => {
    return <div>{article}</div>
  })
  return (
    <div>{results}</div>
  )
}

export default SearchResults;