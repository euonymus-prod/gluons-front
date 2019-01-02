// react
import React, { Component } from 'react'
// redux
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'

// component
import ScrollToTop   from './components/ScrollToTop'
import GlobalFooter  from './components/GlobalFooter'
import Terms         from './components/Terms'
import Privacy       from './components/Privacy'
import Home          from './components/Home'
// style
//import './assets/styles/main.css'


class AppRoutes extends Component {
  componentDidMount() {
  }

  render () {
	  return (
      <BrowserRouter>
        <LastLocationProvider>
          <div className="main-content">

            <ScrollToTop>
              <Switch>
                <Route exact path='/' component={Home}/>

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
