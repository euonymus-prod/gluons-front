// react
import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

// component
import ScrollToTop   from './components/scroll-to-top'
import GlobalFooter  from './components/global_footer';
import Terms         from './components/terms';
import Privacy       from './components/privacy';
import App           from './components/App';
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
                <Route exact path='/' component={App}/>

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

export default connect(state => state, {})(AppRoutes);
