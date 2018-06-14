import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
  state = {
    isOpen: null
  }

  render() {
    const {isOpen} = this.state
    const {comments} = this.props

    return(
      <div>
        <button onClick = {this.toggleOpen}> {isOpen? 'close' : 'open'}</button>
        {this.showComments()}
      </div>

    )
  }
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  showComments = () => {
    if(!this.state.isOpen) return null
      const {comments} = this.props
    if(!comments || !comments.length) return <p>No comments</p>
    const commentElement = comments.map(comment =>
      <li key = {comment.id}>
        <Comment comment = {comment}/>
      </li>
    )
    return <ul> {commentElement}</ul>
  }
}

export default CommentList
