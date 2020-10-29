import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import SignUp from './components/SignUp';
import Home from './components/Home';
import NotFound from './components/NotFound';

class App extends Component {

async Test(){

  try{
    const {data} = await axios.get("/test");
    console.log(data);
  }
  catch(error){
    console.log(error);
  }
  

}

  render() { 
  return ( 
   <React.Fragment>
      <Switch>
      <Route exact path="/home" component={(props)=>(
        <Home
        {...props}
        Test={this.Test}
        />
      )}/>
      <Route exact path="/signup" component={SignUp}/>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/notfound" component={NotFound}/>
      <Redirect to="/notfound"/>
    </Switch>
   </React.Fragment>
  );
  }
}
 
export default App;


