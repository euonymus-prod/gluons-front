// react
import React, { Component } from 'react'
import { withRouter } from 'react-router'
// component
import Navbar from '../containers/Navbar'
import QuarkInList from './QuarkInList'

class Quarks extends Component {
  componentDidMount() {
  }

  renderQuarks() {
	  const { quarks } = this.props
	  if (quarks.length === 0) {
		  return ''
	  }

	  var first = quarks[0]
	  if (!first.id) {
	    return 'failed to fetch'
	  }

	  return quarks.map(quark => {
 	    return (
 		    <div key={quark.id}>
          {(() => {
             if (quark.id !== first.id)
               return <hr />
          })()}
          <QuarkInList quark={quark} />
 		    </div>
 	    )
 	  })
  }

  render () {
	  const { quarkPropertyCaption } = this.props
	  return (
      <div>
        <Navbar />
        <div className="container">
          <h2>{quarkPropertyCaption}</h2>
          <div className="related" >
            <div className="well subject-relation white">
              {this.renderQuarks()}
            </div>
          </div>
          { (this.getPreviousPage() || this.getNextPage()) && (
            <div className="flex ml4 mv3 gray">
              { this.getPreviousPage() && (
                  <span>
                    <button className="btn btn-primary" onClick={this.previousPage}>
                      Previous
                    </button>
                    &nbsp;&nbsp;
                  </span>
              )}
              { this.getNextPage() && (
                  <button className="btn btn-primary" onClick={this.nextPage}>
                    Next
                  </button>
              )}
            </div>
          )}
        </div>
      </div>
	  )
  }

  nextPage = () => {
    const page = this.getNextPage()
    if (page) {
      this.props.history.push(`/list/${page}`)
    }
  }
  getNextPage = () => {
    let nextPage = false
    const { quarkCount, numberPerPage, page } = this.props
    if (page < quarkCount / numberPerPage) {
      nextPage = page + 1
    }
    return nextPage
  }

  previousPage = () => {
    const page = this.getPreviousPage()
    if (page) {
      this.props.history.push(`/list/${page}`)
    }
  }
  getPreviousPage = () => {
    let previousPage = false
    const { page } = this.props
    if (page > 1) {
      previousPage = page - 1
    }
    return previousPage
  }
}

export default withRouter(Quarks)

