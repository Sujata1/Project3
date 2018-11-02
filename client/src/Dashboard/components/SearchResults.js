import React from 'react';
import ArticleContainer from '../containers/ArticleContainer';

const SearchResults = props => {
  let results = props.results.map((article, i) => {
    return <ArticleContainer article={article} key={i} />
  })

  return <div>{results}</div>
}

export default SearchResults;