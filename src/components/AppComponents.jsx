import React from 'react';
import PropTypes from 'prop-types';
import FormApp from './Form/FormApp.jsx';

// Container Components
export default class App extends React.Component {
  render() {
    return (
      <div>
        <FormApp
        handleClick={this.props.onClick}
        data={this.props.value}
        />
      </div>
    );
  }
}
App.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};
