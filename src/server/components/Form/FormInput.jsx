import React from 'react'
import PropTypes from 'prop-types'

// Presentational Components
export default class FormInput extends React.Component {
  send(e) {
    e.preventDefault()
    console.log(this.myInput.value.trim())
    this.props.handleClick(this.myInput.value.trim())
    this.myInput.value = ''
    return
  }
  render() {
    return (
      <form>
        <input id="i" type="text" ref={(ref) => this.myInput = ref} defaultValue="wirte here!" />
        <button onClick={(event) => this.send(event)}>Send</button>
      </form>
    )
  }
}
FormInput.propTypes = {
  handleClick: PropTypes.func.isRequired,
}
