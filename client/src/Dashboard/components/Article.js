import React from 'react';
import dashboard from '../../assets/css/Dashboard.module.css';

const Article = props => {
  let sourceName = false;
  if(props.article.source) {
    sourceName = props.sourcesMap.get(props.article.source);
  }
  return (
    <div className={dashboard.article}>
      <div>
        <span>
          {props.article.title}
          {sourceName && (
            <i> ({sourceName})</i>
          )}
        </span>
      </div>
      <div className={dashboard.articleButtons}>
        <span className={`button ${props.alreadyRated ? 'disabled' : ''}`} onClick={e => {
          if(!props.alreadyRated) {
            props.rateArticle(props.article.source, props.article.url);
            props.addToRecentArticles(props.article);
          }
        }}>{props.alreadyRated ? 'Rated' : 'Rate'}</span>
        <a href={props.article.url} target='_blank' rel='noopener noreferrer'>
          <span className='button' onClick={e => {
            props.addToRecentArticles(props.article);
          }}>Go ➚</span>
        </a>
      </div>
    </div>
  )
}

export default Article;