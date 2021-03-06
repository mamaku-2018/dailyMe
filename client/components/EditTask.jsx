import React from 'react'
import {updateTask} from '../apiClient'

class EditTask extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      task: props.task.task
    }
  }

  updateTask (event) {
    this.setState({
      task: event.target.value.substr(0, 50)
    })
  }

  editTask () {
    this.setState({error: null})
    const task = {
      task: this.state.task,
      id: this.props.task.id
    }
    updateTask(task)
      .then(this.props.onChange)
      .catch(err => this.setState({error: err.message}))
  }

  render () {
    return (
      <form className="editInputForm" onSubmit={this.editTask.bind(this)} >
        <input type="text" id="editTask" value={this.state.task} onChange={this.updateTask.bind(this)} />
        <button id="submitTask"><i className="fas fa-paper-plane"></i>Submit</button>
      </form>
    )
  }
}

export default EditTask
