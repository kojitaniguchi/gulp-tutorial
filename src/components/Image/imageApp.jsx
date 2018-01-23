import React from 'react'
import PropTypes from 'prop-types'
import ImageForm from './ImageForm.jsx'
import ImageDisplay from './ImageDisplay.jsx'

export default class ImageApp extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>画像キーワードを入力</h1>
        </div>
        <div>
          <ImageForm getImage={this.props.getImage} />
        </div>
        <div>
          <h2>取得した画像</h2>
        </div>
        <div>
          <ImageDisplay data={this.props.data}/>
        </div>
      </div>
    )
  }
}
ImageApp.propTypes = {
  getImage: PropTypes.func.isRequired,
  data: PropTypes.object,
}
