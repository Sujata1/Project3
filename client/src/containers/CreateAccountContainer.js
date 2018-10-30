import {connect} from 'react-redux';
import CreateAccount from '../components/CreateAccount';
import {createUser, userCreationStatus as status} from '../actions/createUser';

const mapStateToProps = state => {
  const {userCreationStatus, errorMsg} = state.userCreation;
  const buttonText = userCreationStatus === status.IN_PROGRESS ? '◌' : 'Create Account';
  return {
    errorMsg,
    buttonText
  };
} 

const mapDispatchToProps = dispatch => {
  return {
    createAccount: userInput => {
      dispatch(createUser(userInput));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccount);