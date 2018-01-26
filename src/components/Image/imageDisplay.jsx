import React from 'react'
import PropTypes from 'prop-types'

export default class ImageDisplay extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.error}</p>
        <img src={this.props.data} width="500" height="500" />
      </div>
    )
  }
}
ImageDisplay.propTypes = {
  data: PropTypes.string,
  error: PropTypes.string,
}
