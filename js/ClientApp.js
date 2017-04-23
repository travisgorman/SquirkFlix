import React from 'react'
import { render } 'react-dom'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <div className="app">
        <h1>SquirkFlix</h1>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
