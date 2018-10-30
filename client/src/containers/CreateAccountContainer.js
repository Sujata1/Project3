import {connect} from 'react-redux';
import CreateAccount from '../components/CreateAccount';
import {createUser} from '../actions/createUser';

const mapStateToProps = state => {
  return {};
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