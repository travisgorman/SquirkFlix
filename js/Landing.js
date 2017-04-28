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
    // sets e.target.value to searchTerm by passing it to dispatchSetSearchTerm
    // dispatchSetSearchTerm is a function returned by mapDispatchToProps
    // mapDispatchToProps takes `dispatch` from redux and returns a function that takes
    // searchTerm and dispatches setSearchTerm passing in searchTerm
    this.props.dispatchSetSearchTerm(e.target.value)
  },
  handleSearchSubmit (e) {
    e.preventDefault()
    this.context.router.transitionTo('/search')
    // routes to '/search'
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

// map state to props
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}
// map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}
// connect the two to the Landing component

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
