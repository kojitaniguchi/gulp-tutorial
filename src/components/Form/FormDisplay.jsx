// View (Presentational Components)
export default class FormDisplay extends React.Component {
  render() {
    return (
      <div>{this.props.data}</div>
    );
  }
}
FormDisplay.propTypes = {
  data: React.PropTypes.string,
};
