import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import LoginContainer from '../containers/LoginContainer';
import CreateAccountContainer from '../containers/CreateAccountContainer';
import Authenticate from '../containers/Authenticate';
import Home from '../components/Home';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <main>
          <Router>
            <Switch>
              <Route path='/signin' component={LoginContainer} />
              <Route path='/signup' component={CreateAccountContainer} />
              <Route path='/' component={Authenticate(Home)} />
            </Switch>
          </Router>
        </main>
        <div id='background'></div>
      </div>
    );
  }
}

export default App;
