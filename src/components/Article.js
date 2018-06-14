import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {
  state = {
    isOpen: null
  }

  render() {
    const {isOpen} = this.state
    const {article} = this.props
    return(
      <div>
        <h2>{article.title}</h2>
        <button onClick = {this.toggleOpen}>{isOpen? 'close' : 'open'}</button>
        {this.showText()}
      </div>
    )
  }
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  showText = () => {
    if(!this.state.isOpen) return null
    const {article} = this.props
    return (
      <div>
        {article.text}
        <CommentList comments = {article.comments} />
      </div>
    )
  }
}

export default Article
