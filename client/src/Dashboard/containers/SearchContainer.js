import {connect} from 'react-redux';
import {searchStatus, searchArticles} from '../../actions/searchArticles';
import Search from '../components/Search';

const mapStateToProps = state => {
  return {
    searchResults: [],
    searchStatus: state.search.status
  };
}

const mapDispatchToProps = dispatch => {
  return {
    clickSearch: componentState => {
      if(componentState.searchInput) {
        dispatch(searchArticles(componentState));
      }
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);