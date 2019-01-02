import 'es5-shim'
import 'es6-shim'
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// main routes
import './assets/styles/index.css'
import AppRoutes from './routes'
import * as serviceWorker from './serviceWorker'
import store from './store'

// intls activities
import { IntlProvider, addLocaleData } from 'react-intl'
import ja from 'react-intl/locale-data/ja'
import ja_JP from './locales/ja_JP'
import en_US from './locales/en_US'

const domainString = document.domain
const domainFirstPart = domainString.split('.')[0]

let locale = 'en'
let locale_messages = en_US
if (domainFirstPart === 'ja') {
  addLocaleData([...ja])
  locale = 'ja'
  locale_messages = ja_JP
  // This is required to manually differ the behavior depends on locale.
  localStorage.setItem('locale', JSON.stringify(locale))
}

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={locale} messages={locale_messages}>
      <AppRoutes />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
