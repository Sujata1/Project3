import {connect} from 'react-redux';
import Search from '../components/Search';

const mapStateToProps = state => {
  return {
    searchResults: ['result', 'result']
  };
}

const mapDispatchToProps = dispatch => {
  return {
    clickSearch: componentState => {
      if(componentState.searchInput) {
        console.log('search!');
      }
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);