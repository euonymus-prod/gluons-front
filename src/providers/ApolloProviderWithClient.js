import React, { Component } from 'react'
import { connect } from 'react-redux'
// Apollo Client for GraphQL
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { onError } from "apollo-link-error"

// Building an Apollo client
const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql/'
})
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      return console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      )
    })
  }
  if (networkError) {
    alert(`[Network error]: ${networkError}`)
    console.log(`[Network error]: ${networkError}`)
  }
})

class ApolloProviderWithClient extends Component {
  state = {
    client: false
  }

  componentDidMount() {
    this.refreshClient()
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.authToken !== prevProps.authToken) {
      this.refreshClient()
    }
    return null;
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
  }


  refreshClient() {
    const authLink = setContext((_, { headers }) => {
      const { authToken } = this.props
      return {
        headers: {
          ...headers,
          //authorization: authToken ? `Brearer ${authToken}` : ''
          authorization: authToken ? `JWT ${authToken}` : ''
        }
      }
    })
    const link = ApolloLink.from([
      errorLink,
      authLink.concat(httpLink),
    ])

    const client = new ApolloClient({
      link,
      cache: new InMemoryCache()
    })
    this.setState({client})
  }

  render() {
    const { client } = this.state
    if (!client) {
      return null
    }

    return (
      <ApolloProvider client={client}>
        {this.props.children}
      </ApolloProvider>
    )
  }
}
export default connect(state => state)(ApolloProviderWithClient)
