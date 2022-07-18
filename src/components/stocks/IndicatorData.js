import React from "react";
import { connect } from "react-redux";
import { fetchIndicatorData } from "../../actions/getStock"

class IndicatorData extends React.Component {
  componentDidMount() {
    this.props.fetchIndicatorData()
  }

  //需修改成其他形式，不是table的形式
  renderIndicator() {
    (
      <table className="ui fixed single line celled table">
        <thead>
          <tr><th>Name</th>
            <th>Status</th>
            <th>Description</th>
          </tr></thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Approved</td>
            <td title="This is much too long to fit I'm sorry about that">This is much too long to fit I'm sorry about that</td>
          </tr>
          <tr>
            <td>Jamie</td>
            <td>Approved</td>
            <td>Shorter description</td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Denied</td>
            <td>Shorter description</td>
          </tr>
        </tbody>
      </table>
    )
  }

  render() {
    return <div>{this.renderIndicator()}</div>
  }
};

export default connect(null, { fetchIndicatorData })(IndicatorData);