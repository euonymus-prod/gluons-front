import 'es5-shim'
import 'es6-shim'
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
// main routes
import './assets/styles/index.css'
import Initializer from './Initializer'
import * as serviceWorker from './serviceWorker'
// providers
import ProviderComposer from './providers/ProviderComposer'

ReactDOM.render(
  <ProviderComposer>
    <Initializer />
  </ProviderComposer>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
