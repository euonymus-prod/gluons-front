// general
// react
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
// redux
import { connect } from 'react-redux'
// component
import SearchBar from '../components/SearchBar'
import QuarkNav from './QuarkNav'
import { execLogout } from '../actions/login'
// design
import logo from '../assets/images/logo.gif'
import '../assets/styles/Navbar.css'

class Navbar extends Component {
  onLogoutClick = () => {
    this.props.execLogout()
  }

  onPrivacyChangeClick = () => {
  }

  renderSearchBar () {
	  let patterns = ['^/(?!/)$', '^/login/?', '^/signup/?',
			              '^/quark/add/?', '^/quark/edit/', '^/gluon/add/?', '^/gluon/edit/']

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
    const { user } = this.props
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

            { user && (
               <ul className="nav navbar-nav navbar-right">
                 <li><Link to={'/quark/add'} >New Quark</Link></li>

                 <QuarkNav />

                 <li className="dropdown">
                   <button className="dropdown-toggle plain" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     { user.username }
                     <span className="caret"></span>
                   </button>
                   <ul className="dropdown-menu">
                     <li><Link to={`/users/edit/${'dummy_id'}`}>Edit User</Link></li>
                     <li role="separator" className="divider"></li>
                     <li className="dropdown-header">Privacy Modes</li>

                     { user.isSuperuser && (
                       <li><button type="submit" className="plain" name="4" onClick={this.onPrivacyChangeClick} >Admin</button></li>
                     )}

                     <li><button type="submit" className="plain" name="1" onClick={this.onPrivacyChangeClick} >Public</button></li>
                     <li><button type="submit" className="plain" name="2" onClick={this.onPrivacyChangeClick} >Private</button></li>
                     <li><button type="submit" className="plain" name="3" onClick={this.onPrivacyChangeClick} >All</button></li>

                     <li role="separator" className="divider"></li>
                     <li><button type="submit" className="plain" onClick={this.onLogoutClick} >Logout</button></li>
                   </ul>
                 </li>
               </ul>
            )}
            { !user && (
               <ul className="nav navbar-nav navbar-right">
                 <li><Link to="/login">Login</Link></li>
                 <li><Link to="/signup">Signup</Link></li>
               </ul>
            )}

          </div>

        </div>
      </nav>    
    )
  }
}
export default withRouter(connect(state => state, { execLogout })(Navbar))
