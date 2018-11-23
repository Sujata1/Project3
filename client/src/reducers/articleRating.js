import {MODAL_SHOW, MODAL_HIDE} from '../actions/rateArticle';

const modal = (state = {show: false}, action) => {
  switch(action.type) {
    case MODAL_SHOW: 
      return {
        show: true,
        source: action.sourceid,
        url: action.articleURL
      }
    case MODAL_HIDE:
      return {
        show: false,
        source: null,
        url: null
      }
    default:
      return state;
  }
}

export default modal;