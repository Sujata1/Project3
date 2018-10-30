import {connect} from 'react-redux';
import CreateAccount from '../components/CreateAccount';
import {createAccount} from '../actions/authentication';

const mapStateToProps = state => {
  return {};
} 

const mapDispatchToProps = dispatch => {
  return {
    createAccount: userInfo => {
      dispatch(createAccount(userInfo));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccount);