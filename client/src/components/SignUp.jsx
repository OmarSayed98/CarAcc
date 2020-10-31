import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import axios from "axios";

import "../css/signup/signup.scss";

class SignUp extends Component {
  state = {
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    passwordConfirmation: "",
    errors: {},
  };

  JoiSchema = {
    firstname: Joi.string()
      .regex(/^[a-zA-Z]+$/)
      .required()
      .max(15),
    lastname: Joi.string()
      .regex(/^[a-zA-Z]+$/)
      .required()
      .max(15),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ),
    passwordConfirmation: Joi.ref("password"),
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    let errors = this.handleValidation();
    if (!errors) {
      let newUser = { ...this.state };
      delete newUser.errors;
      delete newUser.passwordConfirmation;
      try {
        await axios.post("/register", { newUser });
        this.props.history.replace("/signin");
      } catch (err) {
        console.log(err);
      }
    }
  };

  handleChange = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };

  handleValidation = () => {
    let errors = {};
    let state = { ...this.state };
    delete state.errors;
    let res = Joi.validate(state, this.JoiSchema, { abortEarly: false });
    if (res.error === null) {
      this.setState({ errors: {} });
      return null;
    }
    for (const error of res.error.details) {
      errors[error.path] = error.message;
      console.log(error.message);
    }
    this.setState({ errors });
    return true;
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <form onSubmit={this.handleSubmit}>
            <h1>Sign up</h1>
            <div className="row">
              <div className="col">
                <label htmlFor="InputFirstName">First name</label>
                <input
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                  id="InputFirstName"
                />
                {this.state.errors.firstname && (
                  <div className="formErrors">
                    <p>First name cannot be empty.</p>
                    <p>First name must contain only english letters.</p>
                    <p>First name cannot be longer than 15 characters.</p>
                  </div>
                )}
              </div>

              <div className="col">
                <label htmlFor="InputLastName">Last name</label>
                <input
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                  id="InputLastName"
                />
                {this.state.errors.lastname && (
                  <div className="formErrors">
                    <p>Last name cannot be empty.</p>
                    <p>Last name must contain only english letters.</p>
                    <p>Last name cannot be longer than 15 characters.</p>
                  </div>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="InputEmail">Email</label>
              <input
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                className="form-control"
                id="InputEmail"
              />
              {this.state.errors.email && (
                <div className="formErrors">
                  <p>{this.state.errors.email}</p>
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword">Password</label>
              <input
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                className="form-control"
                id="InputPassword"
              />
              {this.state.errors.password && (
                <div className="formErrors">
                  <p>Password must be minimum eight characters, </p>
                  <p>
                    Password must contain at least one uppercase letter,one
                    lowercase letter, one number and one special character
                  </p>
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirmation">Confirm password</label>
              <input
                name="passwordConfirmation"
                value={this.state.passwordConfirmation}
                onChange={this.handleChange}
                type="password"
                className="form-control"
                id="passwordConfirmation"
              />
              {this.state.errors.passwordConfirmation && (
                <div className="formErrors">
                  <p>Passwords don't match</p>
                </div>
              )}
            </div>
            <p>
              Already have an account? <Link to="/signin">Sign in</Link>
            </p>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
