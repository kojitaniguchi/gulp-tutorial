import FormInput from './FormInput.jsx';
import FormDisplay from './FormDisplay.jsx';

// View (Container Components)

export default class FormApp extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Redux + React</h1>
        </div>
        <div>
          <FormInput handleClick={this.props.onClick} />
        </div>
        <div>
          <FormDisplay data={this.props.value} />
        </div>
      </div>
    );
  }
}
FormApp.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
};
