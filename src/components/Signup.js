import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Navbar from '../containers/Navbar'

import { AUTH_TOKEN } from '../constants'


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
    localStorage.setItem(AUTH_TOKEN, token)
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
          <div>

            <input
              value={username}
              onChange={e => this.setState({ username: e.target.value })}
              type="text"
              placeholder="Your name"
              className="form-control"
            />
            <input
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
              placeholder="Choose a safe password"
              className="form-control"
            />
            <input
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              type="text"
              placeholder="Your email address"
              className="form-control"
            />

          </div>
          <div className="flex mt3">
            <Mutation
              mutation={SIGNUP_MUTATION}
              variables={{ email, password, username }}
              onCompleted={data => this._confirm(data)}
            >
              {mutation => (
                <div className="pointer mr2 button" onClick={mutation}>
                  create account
                </div>
              )}
            </Mutation>
          </div>

        </div>
        {/*
            <button className="btn btn-primary" type="submit">Sign up</button>
        */}
      </div>
    )
  }
}
export default Signup
