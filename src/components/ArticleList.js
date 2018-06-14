import React, {Component} from 'react'
import Article from './Article'
import {articles} from '../fixtures'

class ArticleList extends Component {
  render() {
    return(
      <ul>
        {articles.map(article =>
          <li key = {article.id}>
            <Article article = {article} />

          </li>
        )}
      </ul>
    )
  }
}
export default ArticleList
