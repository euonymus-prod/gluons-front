import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import LoginUtil from '../utils/LoginUtil'
import Navbar from '../containers/Navbar'
import '../assets/styles/Signup.css'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        id
        username
        email
      }
    }
  }
`

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  _confirm = async data => {
    const { token } = data.createUser
    this._saveUserData(token)
    this.props.history.push(`/`)
  }
  
  _saveUserData = token => {
    LoginUtil.login(token)
  }

  render() {
    const { username, email, password } = this.state
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="logo-top">
            <h1>Sign up</h1>
          </div>
          <div className="form-group center-block input-container-signup">

            <label htmlFor="username">Username</label>
            <input
              value={username}
              onChange={e => this.setState({ username: e.target.value })}
              type="text"
              placeholder="Your name"
              required="required"
              className="form-control"
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
              placeholder="Choose a safe password"
              required="required"
              className="form-control"
            />
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              type="text"
              placeholder="Your email address"
              required="required"
              className="form-control"
            />

            <br />
            <Mutation
              mutation={SIGNUP_MUTATION}
              variables={{ email, password, username }}
              onCompleted={data => this._confirm(data)}
            >
              {(mutation, {loading, error}) => (
                <button className="btn btn-primary" type="submit" onClick={mutation}>
                  Sign up
                </button>
              )}
            </Mutation>
          </div>
        </div>
      </div>
    )
  }
}
export default Signup
