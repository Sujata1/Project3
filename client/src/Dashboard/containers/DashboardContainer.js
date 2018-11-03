import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

const mapStateToProps = state => {
  return {
    recentArticles: state.recentArticles,
    topSources: []
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);