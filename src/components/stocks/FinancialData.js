import React from "react";
import { connect } from "react-redux";
import { fetchFreeCashFlow, fetchDividends, fetchEarninPerShare, fetchROEInterestCoverageNetMargin } from "../../actions/getStock"


class FiancialData extends React.Component {
  componentDidMount() {
    //從parent component StockDetail取得資料
    let symbol = this.props.symbol
    this.props.fetchFreeCashFlow(symbol);
    this.props.fetchDividends(symbol);
    this.props.fetchEarninPerShare(symbol);
    this.props.fetchROEInterestCoverageNetMargin(symbol);
    
  }

  //還未修改內容
  renderTable() {

    if(!this.props.data){return null}
    return (
      <table className="ui fixed single line celled table" key={this.props.data.symbol}>
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
const mapStateToProps = (state) => {
  console.log(state)
  return { data: state.stocks[0] }
  
}
//需要思考如何同時放入不同的props
export default connect(mapStateToProps, { fetchFreeCashFlow, fetchDividends, fetchEarninPerShare,fetchROEInterestCoverageNetMargin })(FiancialData);