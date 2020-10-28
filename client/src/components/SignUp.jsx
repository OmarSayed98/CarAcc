import React, { Component } from 'react';

class SignUp extends Component {
    state = { 
        email:"",
        firstname:"",
        lastname:"",
        password:"",
        errors:[],
     }
    render() { 
        return ( <h1>Sign up</h1> );
    }
}
 
export default SignUp;