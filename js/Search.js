import React from 'react'
import Header from './Header'
import ShowCard from './ShowCard'
import { connect } from 'react-redux'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    })),
    searchTerm: string
  },
  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase()
              .indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show) => {
              return (
                <ShowCard key={show.imdbID} {...show} />
              )
            })}
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

// export const Unwrapped = Search

export default connect(mapStateToProps)(Search)

            // .filter((show) =>  `${show.title} || ${show.description}`.toUpperCase()
            //   .indexOf(this.props.searchTerm.toUpperCase()) >= 0
            //   )
            // .map((show) => {
            //   return <ShowCard key={show.imdbID} {...show} />
            // })
