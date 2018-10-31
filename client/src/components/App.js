import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import Dashboard from '../components/dashboard/dashboard';
import './App.css';

class App extends React.Component {
  render() {
    return (
   
      <div>
        <HeaderContainer />
        <main>
          <Router>
            <Switch>
              <Route path='/' component={Dashboard} />
            </Switch>
          </Router>
        </main>
      </div>
      
    );
  }
}

export default App;
