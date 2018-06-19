import React, {Component} from 'react'

export default Component => class ToggleOpen extends Component {
  state = {
    isOpen: null
  }
  render() {
    return(
      <Component
        {...this.props}
        {...this.state}
        toggleOpen = {this.toggleOpen} 
      />
    )
  }
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
