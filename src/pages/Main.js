import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Navbar from '../containers/Navbar'
import MainQuark from '../components/MainQuark'
import QuarkProperties from '../components/QuarkProperties'
import StructuredData from '../components/StructuredData'

export const QUARK_QUERY = gql`
  query FeedQuery($id: String, $name: String) {
    quark(id: $id, name: $name) {
      id
      createdAt
      name
      imagePath
      description
      url
      postedBy {
        id
        username
      }
      quarkType {
        id
        name
        havingQuarkProperties {
          id
          quarkProperty {
            id
            name
          }
        }
      }
    }
  }
`

class Main extends Component {
  state = {
    sub_gluon_side: 'active',
  }
  activenessPattern = {
	  active: { activeActiveness: 'active', noneActiveness: ''},
	  none:   { activeActiveness: '', noneActiveness: 'active'}
  }

  render() {
    const { quark_name } = this.props.match.params

    return (
      <div>
        <StructuredData />
        <Navbar />
        <div className="container">

          <Query query={QUARK_QUERY} variables={{name: quark_name}}>
            {({ loading, error, data }) => {
               if (loading) return <div>Fetching</div>
               if (error) return <div>Error</div>
               if (!data.quark) return <div>No Data</div>

               return (
                 <div className="row">
                   <MainQuark quark={data.quark} />
                   <div className="col-md-9 subject-relation-list">
                     <ul className="nav nav-pills">
                       <li role="presentation" className={this.activenessPattern[this.state.sub_gluon_side].activeActiveness}>
                         <button type="submit" name="active" className="" onClick={this.onLinkClick}>Active</button>
                       </li>
                       <li role="presentation" className={this.activenessPattern[this.state.sub_gluon_side].noneActiveness}>
                         <button type="submit" name="none" className="" onClick={this.onLinkClick}>None</button>
                       </li>
                     </ul>
                     <QuarkProperties />
                   </div>
                 </div>
               )
            }}
          </Query>

        </div>
      </div>
    )
  }
}
export default Main
