import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';

class App extends Component {
  render() { 
  return ( 
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/signup" component={SignUp}/>
      <Redirect exact from="/" to="/home" />
      <Redirect to="/notfound" />
    </Switch>
  );
  }
}
 
export default App;


