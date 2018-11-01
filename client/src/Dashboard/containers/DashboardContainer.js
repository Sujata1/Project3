import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

const mapStateToProps = state => {
  return {
    recentArticles: [1, 2],
    topSources: [1, 2]
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);