import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import TopSourcesContainer from '../containers/TopSourcesContainer';
import RecentArticlesContainer from '../containers/RecentArticlesContainer';

const Dashboard = props => {
  return (
    <div>
      {Boolean(props.recentArticles.length) && (
        <RecentArticlesContainer />
      )}

      <SearchContainer/>
      
      {Boolean(props.topSources.length) && (
        <TopSourcesContainer />
      )}
    </div>
  )
}

export default Dashboard;






















