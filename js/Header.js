import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
const { bool, string, func } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    showSearch: bool,
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (e) {
    this.props.dispatch(setSearchTerm(e.target.value))
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = (
        <input onChange={this.handleSearchTermChange}
          value={this.props.searchTerm} type='text' placeholder='search' />
      )
      console.log('searchTerm:', this.props.searchTerm)
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            SquirkFlix
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
