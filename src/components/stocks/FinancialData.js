import React from "react";
import { connect } from "react-redux";
import { fetchFreeCashFlow, fetchROEInterestCoverageNetMargin, fetchDividends, fetchEarninPerShare } from "../../actions/getStock"


class FiancialData extends React.Component {

  componentDidMount() {
    //從parent component StockDetail取得資料
    //可以試試看在這邊用promise.all(上面的fetch api)
    let symbol = this.props.symbol
    this.props.fetchFreeCashFlow(symbol);
    this.props.fetchDividends(symbol);
    this.props.fetchEarninPerShare(symbol);
    this.props.fetchROEInterestCoverageNetMargin(symbol);

  }


  //呈現日期
  renderDate() {
    //要將this.props.others轉換成array
    return Array.from(this.props.others).map(date => {
      return (
        <th>{date.date}</th>
      )
    })

  }


  renderEPS() {
    return Array.from(this.props.eps).map(eps => {
      return (
        <td>{eps.eps}</td>
      )
    })
  }

  renderFreeCashFlow() {
    return Array.from(this.props.freeCashFlow).map(cash => {
      return (
        <td>{cash.freeCashFlow}</td>
      )
    })
  }

  renderInterestCoverage() {
    return Array.from(this.props.others).map(ic => {
      return (
        <td>{ic.interestCoverage}</td>
      )
    })
  }

  renderNetMargin() {
    return Array.from(this.props.others).map(net => {
      return (
        <td>{net.netMargin}</td>
      )
    })
  }

  renderROE() {
    return Array.from(this.props.others).map(roe => {
      return (
        <td>{roe.returnOnEquity}</td>
      )
    })
  }

  //需要修改成只要5個名額
  renderDividends() {
    if (!this.props.dividends[0]) {
      return (<tr>
        <td>dividends</td>
        <td> loading </td>
        <td>loading </td>
        <td> loading </td>
        <td> loading </td>
        <td> loading </td>
      </tr>)}
    return (
      <tr>
        <td>dividends</td>
        <td>{this.props.dividends[0].dividends} </td>
        <td>{this.props.dividends[1].dividends} </td>
        <td> {this.props.dividends[2].dividends}</td>
        <td> {this.props.dividends[3].dividends}</td>
        <td> {this.props.dividends[4].dividends} </td>
      </tr>
    )

  }


  passSymbol = () => {
    return this.props.symbol
  }


  render() {
    return (
      <table className="ui fixed single line celled table" key={this.props.symbol}>
        <thead>
          <tr>
            <th>date</th>
            {this.renderDate()}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>earning per share</td>
            {this.renderEPS()}
          </tr>
          <tr>
            <td>free cash flow</td>
            {this.renderFreeCashFlow()}
          </tr>
          <tr>
            <td>interest coverage</td>
            {this.renderInterestCoverage()}
          </tr>
          <tr>
            <td>net margin</td>
            {this.renderNetMargin()}
          </tr>
          <tr>
            <td>return on equity</td>
            {this.renderROE()}
          </tr>
          {this.renderDividends()}
        </tbody>
      </table>
    )
  }
};

//需要再加mapStateToProp的function
const mapStateToProps = state => {
  const freeCashFlow = state.freeCashFlow;

  //但是props.data裡面的資料還是太多了
  return { freeCashFlow, others: state.others, eps: state.eps, dividends: state.dividends }

}

//需要思考如何同時放入不同的props
export default connect(mapStateToProps, { fetchFreeCashFlow, fetchROEInterestCoverageNetMargin, fetchDividends, fetchEarninPerShare })(FiancialData);

//需要在reducer上面寫邏輯