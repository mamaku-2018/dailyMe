import React from 'react'
import {Link} from 'react-router-dom'
import Widget1 from './NewsBox'
import TaskList from './TaskList'
import Header from './Header'

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />
        <Link to='/'>Home</Link>
        <Widget1 />
        <TaskList />
      </div>
    )
  }
}

export default App
