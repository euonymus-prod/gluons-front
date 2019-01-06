import React, { Component } from 'react'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
// component
import Navbar from '../containers/Navbar'
import SearchBar from '../components/SearchBar'
import TopPickups from '../components/TopPickups'
// design
import logo from '../assets/images/logo.gif'
import '../assets/styles/Home.css'

class Home extends Component {
  static propTypes = {
	  intl: intlShape.isRequired
  }

  componentDidMount() {
	  document.title = this.props.intl.formatMessage(
	    {
		    id: 'title_home',
		    defaultMessage: "Search hidden relations on your favorite things, people, company... -\ngluons"
	    }
	  )
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="logo-top">
            <img src={logo} alt="gluons" />
          </div>

          <div className="home">
            <p className="text-center">
              <FormattedMessage
                id="message_home_main"
                defaultMessage={`Search hidden relations on your favorite things, people, company...`} />
            </p>

            <SearchBar type="home" />
            <TopPickups />
          </div>

        </div>
      </div>
    )
  }
}
export default injectIntl(Home)
