import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'


class Article extends Component{
  static propTypes = {

  }
  render() {

    const {article, isOpen, toggleOpen} = this.props
    console.info("__article__", article)

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>{isOpen? 'close' : 'open'}</button>
        {this.showText()}
      </div>

    )
  }

  showText = () => {
    const {article, isOpen} = this.props
    if(!isOpen) return null

    return (
      <div>
        <div>{article.text}</div>
        <CommentList comments = {article.comments}/>
      </div>

    )
  }
}

export default Article
