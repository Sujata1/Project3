import {searchStatus, SEARCH_CALL, SEARCH_RESULTS, SEARCH_ERROR} from '../actions/searchArticles';

const search = (state = {
  results: [],
  status: searchStatus.COMPLETE
}, action) => {
  console.log(state);
  switch(action.type) {
    case SEARCH_CALL:
      return {
        results: [],
        status: searchStatus.IN_PROGRESS
      }
    default: 
      return state;
  }
}

export default search;