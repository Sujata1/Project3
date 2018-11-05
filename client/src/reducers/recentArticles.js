import {RECENTARTICLES_ADD, RECENTARTICLES_RESET} from '../actions/addRecentArticle';

const recentArticles = (state = [], action) => {
  switch(action.type) {
    case RECENTARTICLES_ADD:
      return [
        action.article,
        ...state
      ];
    case RECENTARTICLES_RESET:
      return [];
    default:
      return state;
  }
}

export default recentArticles;