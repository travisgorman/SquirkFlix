import React from 'react'
import { Link } from 'react-router'

const Header = React.createClass({
  render () {
    return (
      <header>
        <h1>
          <Link to='/'>
            SquirkFlix
          </Link>
        </h1>
        <input type='text' placeholder='search' />
      </header>
    )
  }
})

export default Header
