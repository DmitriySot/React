import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default Component => class Accordion extends Component{
  static propTypes = {

  }
  state = {
    openItemId: null
  }
  render() {
    return (
      <Component
        {...this.props}
        {...this.state}
        toggleOpenItem = {this.toggleOpenItem}
      />
    )
  }
  toggleOpenItem = openItem => () => {
    this.setState({
      openItemId: this.state.openItemId === openItem ? null : openItem
    })
  }
}


