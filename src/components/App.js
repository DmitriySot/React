import React, {Component, Fragment} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filters from './Filters'

class App extends Component {
  render() {
    return(
      <Fragment>
        <UserForm />
        <Filters />
        <ArticleList />
      </Fragment>

    )
  }
}

export default App
