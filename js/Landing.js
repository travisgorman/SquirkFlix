import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatchSetSearchTerm: func
  },
  handleSearchTermChange (e) {
    this.props.dispatchSetSearchTerm(e.target.value)
  },
  handleSearchSubmit (e) {
    e.preventDefault()
    this.context.router.transitionTo('/search')
  },
  render () {
    return (
      <div className='landing'>
        <h2>SquirkFlix</h2>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            onChange={this.handleSearchTermChange}
            value={this.props.searchTerm}
            type='text'
            placeholder='Search' />
        </form>
        <Link to='/search'> Or Browse All </Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
