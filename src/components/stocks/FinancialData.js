import React from "react";
import { connect } from "react-redux";
import { fetchFreeCashFlow, fetchDividends, fetchEarninPerShare, fetchROEInterestCoverageNetMargin } from "../../actions/getStock"

class FiancialData extends React.Component {
  componentDidMount() {
    //需要思考如何同時放入不同的props
    this.props.fetchROEInterestCoverageNetMargin();
    this.props.fetchFreeCashFlow();
    this.props.fetchDividends();
    this.props.fetchEarninPerShare()
  }

  //還未修改內容
  renderTable() {
    return (
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
    return <div>{this.renderTable()}</div>
  }
};

//需要再加mapStateToProp的function

//需要思考如何同時放入不同的props
export default connect(null, { fetchFreeCashFlow, fetchDividends,fetchEarninPerShare,fetchROEInterestCoverageNetMargin })(FiancialData);