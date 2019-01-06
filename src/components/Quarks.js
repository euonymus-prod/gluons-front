import gql from 'graphql-tag'

export const QUARKS_QUERY = gql`
  query FeedQuery($first: Int, $skip: Int, $orderBy: String) {
    quarks(first: $first, skip: $skip, orderBy: $orderBy) {
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
      }
    }
    quarkCount
  }
`
