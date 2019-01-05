import React from 'react'
import { connect } from 'react-redux'
// container
import AppRoutes from './routes'
// import InitApp from './containers/init-app'
// import { initSettings } from './actions/settings'

class Initializer extends React.Component {
  componentDidMount() {
    // this.props.initSettings()
  }
  render() {
    return (
      <div>
        <AppRoutes />
      </div>
    )
  }
}

// export default connect(state => state, { initSettings })(Initializer)
export default connect(state => state, { })(Initializer)
