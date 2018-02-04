import React from 'react'
import PropTypes from 'prop-types'
import FormApp from './Form/FormApp.jsx'
import HomeApp from './Home/HomeApp.jsx'
import ImageApp from './Image/ImageApp.jsx'
import { StaticRouter, Route, Link } from 'react-router-dom'

// Container Components
export default class App extends React.Component {
  render() {
  const context = {}
    return (
      <StaticRouter context={context}>
        <div>
          <div className="header">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/form'>Form</Link></li>
              <li><Link to='/image'>Image</Link></li>
            </ul>
          </div>
          <hr />
          <div className="main">
            <Route exact path='/' render={props => <HomeApp value={this.props.value} />} />
            <Route path='/form' render={props => <FormApp handleClick={this.props.handleClick} value={this.props.value} />} />
            <Route path='/image' render={props => <ImageApp getImage={this.props.getImage} data={this.props.data} error={this.props.error}/>} />
          </div>
        </div>
      </StaticRouter>
    )
  }
}
App.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  getImage: PropTypes.func.isRequired,
  data: PropTypes.string,
  error: PropTypes.string,
}
