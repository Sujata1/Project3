import {connect} from 'react-redux';
import {searchArticles, searchReset} from '../../actions/searchArticles';
import Search from '../components/Search';

const mapStateToProps = state => {
  return {
    searchResults: state.search.results,
    searchStatus: state.search.status,
    sources: []
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickSearch: componentState => {
      if(componentState.searchInput) {
        dispatch(searchArticles(componentState));
      }
    },
    reset: () => {
      dispatch(searchReset())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);