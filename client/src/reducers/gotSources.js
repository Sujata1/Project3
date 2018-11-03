import {GOT_SOURCES} from '../actions/getSources';

const sources = (state = [], action) => {
  switch(action.type) {
    case GOT_SOURCES:
      return action.sources
    default:
      return state
  }
}

export default sources;