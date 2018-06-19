import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {articles} from '../fixtures'
import Article from './Article'
import accordion  from '../decorators/accordion'

class ArticleList extends Component{
  static propTypes = {

  }


  render() {
    const {openItemId, toggleOpenItem} = this.props
    return (
      <ul>
        {articles.map(article =>
        <li key = {article.id}>
          <Article
            article = {article}
            toggleOpen = {toggleOpenItem(article.id)}
            isOpen = {openItemId === article.id}
          />
        </li>)}
      </ul>
    )
  }

}

export default accordion(ArticleList)
