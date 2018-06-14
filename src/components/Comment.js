import React, {Component} from 'react'

class Comment extends Component {
  render() {
    const {comment} = this.props
    return(
      <div>
        <p>{comment.text}</p> by <b>{comment.user}</b>
      </div>
    )
  }
}

export default Comment
