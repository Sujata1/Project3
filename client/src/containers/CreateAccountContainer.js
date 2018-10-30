import {connect} from 'react-redux';
import CreateAccount from '../components/CreateAccount';
import {createUser} from '../actions/createUser';

const mapStateToProps = state => {
  return {};
} 

const mapDispatchToProps = dispatch => {
  return {
    createAccount: userInfo => {
      dispatch(createUser(userInfo));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccount);