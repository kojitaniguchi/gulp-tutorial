import React from 'react'
import PropTypes from 'prop-types'
import HomeDisplay from './HomeDisplay.jsx'


// Presentational Components
export default class HomeApp extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>ようこそRedux + Reactへ</h1>
        </div>
        <div>
          <img src="./img/neko.jpg" />
        </div>
        <div>
          <HomeDisplay value={this.props.value} />
        </div>
      </div>
    )
  }
}
HomeApp.propTypes = {
  value: PropTypes.string,
}
