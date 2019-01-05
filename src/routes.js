// react
import React, { Component } from 'react'
// redux
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
// Apollo Client for GraphQL
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { onError } from "apollo-link-error"
import { AUTH_TOKEN } from './constants'

// component
import ScrollToTop   from './components/ScrollToTop'
import GlobalFooter  from './components/GlobalFooter'
import Home          from './components/Home'
import Signup        from './components/Signup'
import Login         from './components/Login'
import Terms         from './components/Terms'
import Privacy       from './components/Privacy'
// style
//import './assets/styles/main.css'

// Building an Apollo client
const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql/'
})
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
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


class AppRoutes extends Component {
  componentDidMount() {
  }

  render () {
	  return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <LastLocationProvider>
            <div className="main-content">

              <ScrollToTop>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/signup' component={Signup}/>
                  <Route exact path='/login' component={Login}/>

                  {/* components  */}
                  <Route path='/terms' component={Terms}/>
                  <Route path='/privacy' component={Privacy}/>
                </Switch>
              </ScrollToTop>

            </div>
            <GlobalFooter />

          </LastLocationProvider>
        </ApolloProvider>
      </BrowserRouter>
	  )
  }
}

export default connect(state => state, {})(AppRoutes)
