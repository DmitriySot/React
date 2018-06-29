import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component{
  static propTypes = {

  }
  state = {
    user: ''
  }
  render() {
    return (
      <Fragment>
        Name: <input
          type = 'text'
          value = {this.state.user}
          onChange = {this.handleChange}
        />
      </Fragment>
    )
  }
  handleChange = ev => {
    console.log("__target__", ev.target)

    this.setState({user: ev.target.value})
  }
}

export default UserForm
