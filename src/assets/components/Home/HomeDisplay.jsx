import React from 'react'
import PropTypes from 'prop-types'

// View (Presentational Components)
export default class HomeDisplay extends React.Component {
  render() {
    return (
      <div>
        <p>現在のvalue</p>
        <div>{this.props.value}</div>
      </div>
    )
  }
}
HomeDisplay.propTypes = {
  value: PropTypes.string,
}
