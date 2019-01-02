import _ from 'lodash'
// react
import React, { Component } from 'react'
// redux
import { connect } from 'react-redux'
// component
// import TopPickupDetail from '../components/top_pickup_detail'

class TopPickups extends Component {
  state = {
	  pickups: []
  }

  componentDidMount() {
  }

  renderPickups() {
	  const { pickups } = this.state
	  return _.map(pickups, pickup => {
	    return (
        <div key={pickup.id} className="col-md-3">
        </div>
	    )
	  })
  }
  // <TopPickupDetail pickup={pickup}/>

  render () {
	  return (
      <div className="top-pickup-links center-block">
        <div className="row">
          {this.renderPickups()}
		    </div>
      </div>
	  )
  }
}
export default connect(state => state, { })(TopPickups)
