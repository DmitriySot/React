import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {articles} from '../../fixtures'

class SelectFilter extends Component{
  static propTypes = {

  }
  state = {
    selected: []
  }

  render() {


    const options = articles.map(article => ({
      value: article.id,
      label: article.title
    }))


    return (
      <Fragment>
        <Select
          name="article"
          value={this.state.selected}
          onChange={this.handleChange}
          options={options}
          multi
        />
      </Fragment>
    )
  }
  handleChange = (selected) => {
    this.setState({selected})
  }
}

export default SelectFilter
