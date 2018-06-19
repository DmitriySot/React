import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component{
  static propTypes = {

  }


  render() {

    const {comments, isOpen, toggleOpen} = this.props
    return (
      <div>
        <button onClick = {toggleOpen}> {isOpen? 'close comment' : 'open comments'} </button>
        {this.showComments()}
      </div>
    )
  }

  showComments = () => {
    const {comments, isOpen} = this.props
    if(!isOpen) return null
    if(!comments || !comments.length) return 'No Comments'

    const commentsElement = comments.map(comment =>
      <li key = {comment.id}>
        <Comment comment = {comment} />
      </li>)
    return(
      <ul>
        {commentsElement}
      </ul>
    )
  }
}

export default toggleOpen(CommentList)
