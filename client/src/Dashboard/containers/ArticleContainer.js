import {connect} from 'react-redux';
import Article from '../components/Article';
import { addRecentArticle } from '../../actions/addRecentArticle';

const mapStateToProps = state => {
  return {
    sourcesMap: state.sources
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToRecentArticles: article => {
      dispatch(addRecentArticle(article));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);