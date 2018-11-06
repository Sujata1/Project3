import React from 'react';
import dashboard from '../../assets/css/Dashboard.module.css';

const Source = props => {
  return (
    <div className={dashboard.source}>
      <div>{`${props.num}. ${props.src.name}`}</div>
      <div>
        <span>Credible: {props.src.credibleScore.toFixed(1)}</span>
        <span>Accurate: {props.src.accurateScore.toFixed(1)}</span>
        <span>Relevant: {props.src.relevantScore.toFixed(1)}</span>
      </div>
    </div>
  )
}

export default Source;