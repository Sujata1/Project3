import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import LoginContainer from '../containers/LoginContainer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <main>
          <Router>
            <Switch>
              <Route path='/' component={LoginContainer} />
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
