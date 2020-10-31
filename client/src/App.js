import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import SignUp from './components/SignUp';
import Home from './components/Home';
import NotFound from './components/NotFound';
import SignIn from './components/SignIn';

class App extends Component {

  render() { 
  return ( 
   <React.Fragment>
      <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/signin" component={SignIn}/>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/notfound" component={NotFound}/>
      <Redirect to="/notfound"/>
    </Switch>
   </React.Fragment>
  );
  }
}
 
export default App;


