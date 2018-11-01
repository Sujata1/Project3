import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import TopSourcesContainer from '../containers/TopSourcesContainer';
import RecentArticlesContainer from '../containers/RecentArticlesContainer';

const Dashboard = props => {
  return (
    <div>
      {props.recentArticles.length && (
        <RecentArticlesContainer />
      )}
      {props.topSources.length && (
        <TopSourcesContainer />
      )}
      <SearchContainer/>
    </div>
  )
}

export default Dashboard;






















