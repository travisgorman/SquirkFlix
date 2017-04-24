import React from 'react'
import { Link } from 'react-router'
const { string } = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
    title: string,
    year: string,
    description: string,
    poster: string,
    imdbID: string
  },
  render () {
    const { title, year, description, poster, imdbID } = this.props
    return (
      <Link to={`/details/${imdbID}`} >
        <div className='show-card'>
          <img src={`/public/img/posters/${poster}`} />
          <div>
            <h3>{title}</h3>
            <h4>{year}</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
  }
})

export default ShowCard

