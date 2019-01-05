import React, { Component } from 'react'
// Apollo Client for GraphQL
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { onError } from "apollo-link-error"
import LoginUtil from '../utils/LoginUtil'

// Building an Apollo client
const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql/'
})
const authLink = setContext((_, { headers }) => {
  const token = LoginUtil.getToken()
  return {
    headers: {
      ...headers,
      //authorization: token ? `Brearer ${token}` : ''
      authorization: token ? `JWT ${token}` : ''
    }
  }
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

const link = ApolloLink.from([
  errorLink,
  authLink.concat(httpLink),
])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})


class ApolloProviderWithClient extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        {this.props.children}
      </ApolloProvider>
    )
  }
}
export default ApolloProviderWithClient
