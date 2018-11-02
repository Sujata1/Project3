export const SEARCH_CALL = 'SEARCH_CALL';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

export const searchStatus = {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETE: 'COMPLETE',
  ERROR: 'ERROR'
}

export function searchArticles(containerState) {
  return dispatch => {
    if(containerState.searchInput) {
      dispatch(searchCall());
    }
  }
}

function searchCall() {
  return {
    type: SEARCH_CALL
  }
}