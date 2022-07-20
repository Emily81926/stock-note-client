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
    console.log(this.props)
   const data = this.props.data
    return (
      <table className="ui fixed single line celled table" key={this.props.symbol}>
        <thead>
          <tr><th>Name</th>
            <th>Status</th>
            <th>Description</th>
          </tr></thead>
        <tbody>
          <tr>
            <td>{data.dividends}</td>
            <td>{data.earningspersharebasic}</td>
            <td >{data.freeCashFlow}</td>
          </tr>
          <tr>
            <td>{data.returnOnEquity}</td>
            <td>{data.interestCoverage}</td>
            <td>{data.netProfitMargin}</td>
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
  const data = { ...state.dividends, ...state.eps, ...state.freeCashFlow, ...state.others }
  //但是props.data裡面的資料還是太多了
  return { data }
  
}
//需要思考如何同時放入不同的props
export default connect(mapStateToProps, { fetchFreeCashFlow, fetchDividends, fetchEarninPerShare,fetchROEInterestCoverageNetMargin })(FiancialData);

//需要在reducer上面寫邏輯