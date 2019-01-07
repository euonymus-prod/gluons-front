import React, { Component, Fragment } from 'react'
import { injectIntl, intlShape } from 'react-intl';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Quarks from '../components/Quarks';
import { QUARKS_PER_PAGE } from '../constants'

const QUARKS_SEARCH_QUERY = gql`
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

class Search extends Component {
  static propTypes = {
	  intl: intlShape.isRequired
  }

  componentDidMount() {
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
    const orderBy = 'created_at'
    return { search, first, skip, orderBy }
  }

  render() {
    // const quarks = [
    //   {id: 1, name: 'aa', imagePath: '/img/no_image.jpg', description: 'yey',
    //    start: '2000-08-07', end: '', startAccuracy: 'month'},
    //   {id: 2, name: 'bb', imagePath: '/img/no_image.jpg', description: 'yey',
    //    start: '', end: '2008-04-01', endAccuracy: 'year'},
    // ]
    return (
      <Query query={QUARKS_SEARCH_QUERY} variables={this._getQueryVariables()}>
        {({ loading, error, data }) => {
           if (loading) return <div>Fetching</div>
           if (error) return <div>Error</div>
           if (data.quarkCount === 0) return <div>No Data</div>

           return (
             <Fragment>
               <Quarks
                 quarkPropertyCaption="Quarks"
                 quarks={data.quarks}
                 quarkCount={data.quarkCount}
                 numberPerPage={QUARKS_PER_PAGE}
                 page={parseInt(this.props.match.params.page, 10)}
               />
             </Fragment>
           )
        }}
      </Query>
    )
  }
}
export default injectIntl(Search)
