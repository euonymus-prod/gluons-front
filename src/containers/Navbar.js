// general
// react
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
// redux
import { connect } from 'react-redux'
// constants
import { AUTH_TOKEN } from '../constants'
// component
import SearchBar from '../components/SearchBar'
// design
import logo from '../assets/images/logo.gif'
import '../assets/styles/Navbar.css'

class Navbar extends Component {
  onLogoutClick = () => {
  }

  onPrivacyChangeClick = () => {
  }

  renderSearchBar () {
	  let patterns = ['^/(?!/)$', '^/login/?', '^/signup/?',
			              '^/subjects/add/?', '^/subjects/edit/', '^/relations/add/?', '^/relations/edit/']

	  let withSearchBar = true
	  patterns.map(x => {
	    if (this.props.location.pathname.match(x)) {
		    withSearchBar = false
	    }
	    return null
	  })

    if (withSearchBar) {
      return (
        <SearchBar type="navbar" />
      )
    }
    return ''
  }

  render () {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand"><img src={logo} alt="gluons" /></Link>
            {this.renderSearchBar()}
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/subjects">
                  <FormattedMessage
                    id="menu_navbar_list"
                    defaultMessage={`List`} />
                </Link>
              </li>
            </ul>

            {(() => { if (authToken) { return (
               <ul className="nav navbar-nav navbar-right">
               </ul>
            );} else { return (
               <ul className="nav navbar-nav navbar-right">
                 <li><Link to="/login">Login</Link></li>
                 <li><Link to="/signup">Signup</Link></li>
               </ul>
            );} })()}

          </div>

        </div>
      </nav>    
    )
  }
}
export default withRouter(connect(state => state, { })(Navbar))
