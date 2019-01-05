import React, { Component } from 'react'
// Redux
import { Provider } from 'react-redux'
import store from './store'
// Apollo
import ApolloProviderWithClient from './ApolloProviderWithClient'
// Intl
import IntlProviderWithLocale from './IntlProviderWithLocale'

class ProviderComposer extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProviderWithClient>
          <IntlProviderWithLocale>
            {this.props.children}
          </IntlProviderWithLocale>
        </ApolloProviderWithClient>
      </Provider>
    )
  }
}
export default ProviderComposer
