import React from 'react'
import PropTypes from 'prop-types'

export default class ImageForm extends React.Component {
  send(e) {
    e.preventDefault()
    console.log(this.myInput.value.trim())
    this.props.getImage(this.myInput.value.trim())
    this.myInput.value = ''
  }
  render() {
    return (
      <form>
        <input type='text' ref={(ref) => this.myInput = ref } defaultValue="メロン" />
        <button onClick={(event) => this.send(event)}>Send</button>
      </form>
    )
  }
}

ImageForm.propTypes = {
  getImage: PropTypes.func.isRequired,
}
