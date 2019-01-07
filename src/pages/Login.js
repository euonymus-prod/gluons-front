import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withLastLocation } from 'react-router-last-location';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Navbar from '../containers/Navbar'
import '../assets/styles/Signup.css'
import { setAuthToken } from '../actions/login'

const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password){
      token
    }
  }
`

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  _confirm = async data => {
    const { token } = data.tokenAuth
    this._saveUserData(token)

	  let redirectLocation = '/';
    const { lastLocation } = this.props
	  if (lastLocation && (lastLocation.pathname !== '/signup') && (lastLocation.pathname !== '/login')) {
	    redirectLocation = lastLocation;
	  }
    this.props.history.push(redirectLocation)
  }
  
  _saveUserData = token => {
    this.props.setAuthToken(token)
  }

  render() {
    const { username, password } = this.state
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="logo-top">
            <h1>Login</h1>
          </div>
          <div className="form-group center-block input-container-signup">
            <form acceptCharset="utf-8" >

              <label htmlFor="username">Username</label>
              <input
                value={username}
                onChange={e => this.setState({ username: e.target.value })}
                type="text"
                placeholder="Your name"
                required="required"
                className="form-control"
                autoComplete="current-password"
              />
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
                placeholder="Your password"
                required="required"
                className="form-control"
                autoComplete="current-password"
              />
            </form>

            <br />
            <Mutation
              mutation={LOGIN_MUTATION}
              variables={{ password, username }}
              onCompleted={data => this._confirm(data)}
            >
              {(mutation, {loading, error}) => (
                <button className="btn btn-primary" type="submit" onClick={mutation}>
                  Login
                </button>
              )}
            </Mutation>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(state => state, { setAuthToken } )(withLastLocation(Login))
