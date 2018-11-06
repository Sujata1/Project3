import {combineReducers} from 'redux';
import userAuthentication from './userAuthentication';
import userCreation from './userCreation';
import search from './articleSearch';
import sources from './gotSources';
import recentArticles from './recentArticles';
import modal from './articleRating';

export default combineReducers({
  userAuthentication,
  userCreation,
  search,
  sources,
  recentArticles,
  modal
})