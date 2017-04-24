import React from 'react'
import Header from './Header'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        <Header showSearch />
        {preload.shows.map((show) => <ShowCard key={show.imdbID} {...show} />)}
      </div>
    )
  }
})

export default Search
