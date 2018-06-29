import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'

class Filters extends Component{
  static propTypes = {

  }

  render() {
    return (
      <Fragment>
        <SelectFilter />
        <DateRange />
      </Fragment>
    )
  }
}

export default Filters
