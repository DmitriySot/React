import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component{
  static propTypes = {

  }

  render() {
    const {comment} = this.props
    return (
      <div>
        <p>{comment.text}</p> by <b>{comment.user}</b>
      </div>

    )
  }
}

export default Comment
