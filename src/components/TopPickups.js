// react
import React, { Component } from 'react'
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
export default TopPickups

const dummyData = [
  {
    id: "1",
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
  },
  {
    id: "2",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
  },
  {
    id: "3",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
  },
  {
    id: "4",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
  },
  {
    id: "5",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
  },
  {
    id: "6",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
  },
  {
    id: "7",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
  },
  {
    id: "8",
    quark_type_id: 2,
    name: "絢子女王",
    image_path: "/img/no_image.jpg",
  },
]
