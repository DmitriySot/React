import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import './style.css'

class CommentForm extends Component{
  static propTypes = {

  }
  state = {
    user: '',
    comment: ''
  }

  render() {

    return (
      <form>
        Name: <input
          type = 'text'
          value = {this.state.user}
          onChange = {this.handleChange('user')}
          className = {this.getClassname('user')}
        />
        Comment: <input
          type = 'text'
          value = {this.state.comment}
          onChange = {this.handleChange('comment')}
          className = {this.getClassname('comment')}
        />
      </form>
    )
  }
  getClassname = type => {
    if(this.state[type].length < limits[type].min || this.state[type].length > limits[type].max) return 'error'
    return ''
    
  }

  handleChange = type => ev => {
    console.info("__type__", type)
    this.setState({[type]: ev.target.value})
  }
}
const limits = {
  user: {
    min: 5,
    max: 15
  },
  comment: {
    min: 15,
    max: 50
  }
}
export default CommentForm
