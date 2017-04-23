import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h2>SquirkFlix</h2>
        <form>
          <input type='text' placeholder='Search' />
        </form>
        <Link to='/search'>Or Browse All</Link>
      </div>
    )
  }
})

export default Landing
