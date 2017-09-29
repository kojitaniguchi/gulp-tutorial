import FormApp from './Form/FormApp.jsx';

// View (Container Components)
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
  onClick: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
};
