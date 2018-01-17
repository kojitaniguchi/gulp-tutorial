import React from 'react'
import PropTypes from 'prop-types'

// Presentational Components
export default class FormInput extends React.Component {
  send(e) {
    e.preventDefault()
    this.props.handleClick(this.myInput.value.trim())
    this.myInput.value = ''
    return
  }
  fetch(e) {
    e.preventDefault()
  }
  render() {
    return (
      <form>
        <input id="i" type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
        <button onClick={(event) => this.send(event)}>Send</button>
        <button onClick={(event) => this.fetch(event)}>image</button>
      </form>
    )
  }
}
FormInput.propTypes = {
  handleClick: PropTypes.func.isRequired,
}
