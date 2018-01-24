import React from 'react'
import PropTypes from 'prop-types'

export default class ImageDisplay extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.error}</p>
        <img src={this.props.data} />
      </div>
    )
  }
}
ImageDisplay.propTypes = {
  data: PropTypes.string,
  error: PropTypes.string,
}
