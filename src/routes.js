// react
import React, { Component } from 'react'
// redux
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
// component
import ScrollToTop   from './components/ScrollToTop'
import GlobalFooter  from './components/GlobalFooter'
import RedirectComposer from './components/RedirectComposer'
// pages
import Home          from './pages/Home'
import Main          from './pages/Main'
import List          from './pages/List'
import Search        from './pages/Search'
import AddQuark      from './pages/AddQuark'
import Signup        from './pages/Signup'
import Login         from './pages/Login'
import Terms         from './pages/Terms'
import Privacy       from './pages/Privacy'
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
                <Route exact path='/list/:page' component={List}/>
                <Route exact path='/list' component={List}/>
                <Route exact path='/search/:keyword' component={Search}/>
                <Route exact path='/quark/add' component={AddQuark}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/login' component={Login}/>
                <Route path='/terms' component={Terms}/>
                <Route path='/privacy' component={Privacy}/>

                {/* NOTE: These are redirects from the legacy path for SEO */}
                <Route path='/subjects/search/:param' component={RedirectComposer}/>
                <Route path='/subjects/relations/:param' component={RedirectComposer}/>
                <Route path='/subjects' component={RedirectComposer}/>

                {/* NOTE: '/:quark_name' always has to be at the bottom */}
                <Route exact path='/:quark_name' component={Main}/>
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
