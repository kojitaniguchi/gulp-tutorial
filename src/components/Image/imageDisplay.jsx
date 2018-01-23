import React from 'react'
import PropTypes from 'prop-types'

export default class ImageDisplay extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.data} />
      </div>
    )
  }
}
ImageDisplay.propTypes = {
  data: PropTypes.object,
}
