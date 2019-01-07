import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class RedirectComposer extends Component {
  render() {
    let location = '/'
    if (this.props.location.pathname.match(/\/subjects\/?$/g)) {
      location = '/list'
    } else if (this.props.location.pathname.match(/\/subjects\/search\//g)) {
      location = `/search/${this.props.match.params.param}`
    } else if (this.props.location.pathname.match(/\/subjects\/relations\//g)) {
      location = `/${this.props.match.params.param}`
    }

    return (
      <Redirect to={location} />
    )
  }
}
export default RedirectComposer
