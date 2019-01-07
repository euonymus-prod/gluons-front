// react
import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
// redux
import { connect } from 'react-redux'
import LoginUtil from '../utils/LoginUtil';

class QuarkNav extends Component {
  state = {
	  submit_count: this.props.submit_count
  }

  onDeleteClick = () => {
  }

  render () {
    const { currentQuark, user } = this.props;

	  if (!currentQuark) {
	    return '';
	  }
	  const login_util = new LoginUtil();
	  if (!login_util.isAuthorized(user, currentQuark)) {
	    return '';
	  }

	  return (
      <li className="dropdown">
        <button className="dropdown-toggle plain" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Quark <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li><Link to={`/quark/edit/`}>Edit Quark</Link></li>
          <li>
            <button type="submit" className="plain" onClick={this.onDeleteClick}>Delete</button>
          </li>
        </ul>
      </li>
	  )
  }
}
export default withRouter(connect(state => state, { })(QuarkNav))
