// react
import React, { Component } from 'react'
// redux
import { connect } from 'react-redux'
// component
import TopPickupDetail from '../components/TopPickupDetail'
// design
import '../assets/styles/TopPickups.css'

class TopPickups extends Component {
  state = {
	  pickups: []
  }

  componentDidMount() {
    this.setState({ pickups: dummyData })
  }

  renderPickups() {
	  const { pickups } = this.state
	  return pickups.map(pickup => {
	    return (
        <div key={pickup.id} className="col-md-3">
          <TopPickupDetail pickup={pickup}/>
        </div>
	    )
	  })
  }

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

const dummyData = [
  {
    id: "1",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
    description: "あやこじょおう",
    start: "1990-09-15T00:00:00+09:00",
    end: null,
    is_momentary: false,
    start_accuracy: "",
    end_accuracy: "",
    url: "",
    affiliate: "",
    gender: null,
    type: "active",
    user_id: 1,
    last_modified_user: 1,
    created: "2016-11-01T00:00:00+09:00",
    modified: "2016-11-01T00:00:00+09:00"
  },
  {
    id: "2",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
    description: "あやこじょおう",
    start: "1990-09-15T00:00:00+09:00",
    end: null,
    is_momentary: false,
    start_accuracy: "",
    end_accuracy: "",
    url: "",
    affiliate: "",
    gender: null,
    type: "active",
    user_id: 1,
    last_modified_user: 1,
    created: "2016-11-01T00:00:00+09:00",
    modified: "2016-11-01T00:00:00+09:00"
  },
  {
    id: "3",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
    description: "あやこじょおう",
    start: "1990-09-15T00:00:00+09:00",
    end: null,
    is_momentary: false,
    start_accuracy: "",
    end_accuracy: "",
    url: "",
    affiliate: "",
    gender: null,
    type: "active",
    user_id: 1,
    last_modified_user: 1,
    created: "2016-11-01T00:00:00+09:00",
    modified: "2016-11-01T00:00:00+09:00"
  },
  {
    id: "4",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
    description: "あやこじょおう",
    start: "1990-09-15T00:00:00+09:00",
    end: null,
    is_momentary: false,
    start_accuracy: "",
    end_accuracy: "",
    url: "",
    affiliate: "",
    gender: null,
    type: "active",
    user_id: 1,
    last_modified_user: 1,
    created: "2016-11-01T00:00:00+09:00",
    modified: "2016-11-01T00:00:00+09:00"
  },
  {
    id: "5",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
    description: "あやこじょおう",
    start: "1990-09-15T00:00:00+09:00",
    end: null,
    is_momentary: false,
    start_accuracy: "",
    end_accuracy: "",
    url: "",
    affiliate: "",
    gender: null,
    type: "active",
    user_id: 1,
    last_modified_user: 1,
    created: "2016-11-01T00:00:00+09:00",
    modified: "2016-11-01T00:00:00+09:00"
  },
  {
    id: "6",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
    description: "あやこじょおう",
    start: "1990-09-15T00:00:00+09:00",
    end: null,
    is_momentary: false,
    start_accuracy: "",
    end_accuracy: "",
    url: "",
    affiliate: "",
    gender: null,
    type: "active",
    user_id: 1,
    last_modified_user: 1,
    created: "2016-11-01T00:00:00+09:00",
    modified: "2016-11-01T00:00:00+09:00"
  },
  {
    id: "7",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
    description: "あやこじょおう",
    start: "1990-09-15T00:00:00+09:00",
    end: null,
    is_momentary: false,
    start_accuracy: "",
    end_accuracy: "",
    url: "",
    affiliate: "",
    gender: null,
    type: "active",
    user_id: 1,
    last_modified_user: 1,
    created: "2016-11-01T00:00:00+09:00",
    modified: "2016-11-01T00:00:00+09:00"
  },
  {
    id: "8",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
    description: "あやこじょおう",
    start: "1990-09-15T00:00:00+09:00",
    end: null,
    is_momentary: false,
    start_accuracy: "",
    end_accuracy: "",
    url: "",
    affiliate: "",
    gender: null,
    type: "active",
    user_id: 1,
    last_modified_user: 1,
    created: "2016-11-01T00:00:00+09:00",
    modified: "2016-11-01T00:00:00+09:00"
  },
]
