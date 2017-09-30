import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput.jsx';
import FormDisplay from './FormDisplay.jsx';

// Presentational Components
export default class FormApp extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Redux + React</h1>
        </div>
        <div>
          <FormInput handleClick={this.props.handleClick} />
          <FormDisplay data={this.props.data} />
        </div>
      </div>
    );
  }
}
FormApp.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};
