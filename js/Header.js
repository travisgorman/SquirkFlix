import React from 'react'
import { Link } from 'react-router'
const { bool } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    showSearch: bool
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input type='text' placeholder='search' />
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

export default Header
