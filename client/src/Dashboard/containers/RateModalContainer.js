import {connect} from 'react-redux';
import RateModal from '../components/RateModal';
import {hideModal} from '../../actions/rateArticle';

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch(hideModal());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateModal);