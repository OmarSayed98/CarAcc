import React, { Component } from 'react';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <h1>Home</h1>
            <h3>Click here to test backend server, console will log test passed if test was successful</h3>
            <button onClick={this.props.Test}>Button</button>
        </React.Fragment> );
    }
}
 
export default Home;