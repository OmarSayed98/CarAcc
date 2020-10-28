import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  state = { 
    response:"",
   }

  async componentDidMount(){

    const {data} = await axios.get("http://localhost:3001/test");
    
    console.log(data);
    this.setState({response:data})
   }

   async componentDidUpdate(){

    const {data} = await axios.get("http://localhost:3001/test");
    
    this.setState({response:data});
   }
   

  render() { 
  return ( <h1>{this.state.response}</h1> );
  }
}
 
export default App;


