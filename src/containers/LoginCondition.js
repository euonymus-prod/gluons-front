import { Component } from 'react'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import { refreshLogin } from '../actions/login'

export const ME_QUERY = gql`
  query meQuery {
    me {
      id
      username
      email
      isSuperuser
      isActive
    }
  }
`

class LoginCondition extends Component {
  componentDidMount() {
    this.retrieveUser()
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.authToken !== prevProps.authToken) {
      this.retrieveUser()
    }
    return null;
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  retrieveUser() {
    const { authToken } = this.props
    if (authToken) {
      this.props.client.query({
        query: ME_QUERY,
        fetchPolicy: 'network-only' // Important: This stops using cache return
      }).then(response => {
        const { me } = response.data
        this.props.refreshLogin(me)
      })
    }
  }

  render() {
    const { authToken, user } = this.props
    if (authToken && !user) {
      return null
    }
    return this.props.children
  }
}
export default  connect(state => state, { refreshLogin })(withApollo(LoginCondition))
