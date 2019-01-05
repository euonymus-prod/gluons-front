// react
import React, { Component } from 'react'
// redux
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
// component
import ScrollToTop   from './components/ScrollToTop'
import GlobalFooter  from './components/GlobalFooter'
import Home          from './components/Home'
import Signup        from './components/Signup'
import Login         from './components/Login'
import Terms         from './components/Terms'
import Privacy       from './components/Privacy'
// style
import './assets/styles/routes.css'

class AppRoutes extends Component {
  render () {
	  return (
      <BrowserRouter>
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
      </BrowserRouter>
	  )
  }
}

export default connect(state => state, {})(AppRoutes)
