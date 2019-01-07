import React, { Component } from 'react'
import { injectIntl, intlShape } from 'react-intl';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Quarks from '../components/Quarks';
import { QUARKS_PER_PAGE } from '../constants'

export const QUARKS_QUERY = gql`
  query FeedQuery($search: String, $first: Int, $skip: Int, $orderBy: String) {
    quarks(search: $search, first: $first, skip: $skip, orderBy: $orderBy) {
      id
      createdAt
      name
      imagePath
      description
      start
      end
      startAccuracy
      endAccuracy
      url
      postedBy {
        id
        username
      }
      quarkType {
        id
        name
      }
    }
    quarkCount(search: $search)
  }
`

class List extends Component {
  static propTypes = {
	  intl: intlShape.isRequired
  }

  componentDidMount() {
    // TODO: Searchの場合は title を変えた方が良さそう
	  document.title = "Quarks -\n" +  this.props.intl.formatMessage(
	    {
		    id: 'noun_gluons',
		    defaultMessage: "gluons"
	    }
	  )
  }

  _getQueryVariables = () => {
    const search = this.props.match.params.keyword
    const page = parseInt(this.props.match.params.page, 10)
    const skip = (page - 1) * QUARKS_PER_PAGE
    const first = QUARKS_PER_PAGE
    // TODO: Searchの場合は orderBy を変えた方が良さそう
    const orderBy = 'created_at'
    return { search, first, skip, orderBy }
  }

  render() {
    // TODO: Searchの場合は quarkPropertyCaption を変えた方が良さそう
    return (
      <Query query={QUARKS_QUERY} variables={this._getQueryVariables()}>
        {({ loading, error, data }) => {
           if (loading) return <div>Fetching</div>
           if (error) return <div>Error</div>
           if (data.quarkCount === 0) return <div>No Data</div>

           return (
           <Quarks
             quarkPropertyCaption="Quarks"
             quarks={data.quarks}
             quarkCount={data.quarkCount}
             numberPerPage={QUARKS_PER_PAGE}
             page={parseInt(this.props.match.params.page, 10)}
           />
           )
        }}
      </Query>
    )
  }
}
export default injectIntl(List)
