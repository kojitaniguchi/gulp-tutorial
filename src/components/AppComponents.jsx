import React from 'react'
import PropTypes from 'prop-types'
import FormApp from './Form/FormApp.jsx'
import HomeApp from './Home/HomeApp.jsx'
import { BrowserRouter, Route, Link } from 'react-router-dom'

// Container Components
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/form'>Form</Link></li>
          </ul>
        <hr />

        <Route exact path='/' render={props => <HomeApp value={this.props.value} />} />
        <Route path='/form' render={props => <FormApp handleClick={this.props.handleClick} value={this.props.value} />} />
        </div>
      </BrowserRouter>
    )
  }
}
App.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string,
}
