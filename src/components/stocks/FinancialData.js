import React from "react";
import { connect } from "react-redux";
import { fetchFreeCashFlow, fetchROEInterestCoverageNetMargin, fetchDividends, fetchEarninPerShare } from "../../actions/getStock"

const textStyle = {
  textAlign: 'center'
}

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
        <th style={textStyle}>{date.date}</th>
      )
    })

  }


  renderEPS() {
    return Array.from(this.props.eps).map(eps => {
      return (
        <td style={textStyle}>{eps.eps}</td>
      )
    })
  }

  renderFreeCashFlow() {
    return Array.from(this.props.freeCashFlow).map(cash => {
      return (
        <td style={textStyle}>{cash.freeCashFlow / 1000000}</td>
      )
    })
  }

  renderInterestCoverage() {
    return Array.from(this.props.others).map(ic => {
      return (
        <td style={textStyle}>{Math.round(ic.interestCoverage * 10)/ 10}</td>
      )
    })
  }

  renderNetMargin() {
    return Array.from(this.props.others).map(net => {
      return (
        <td style={textStyle}>{Math.round(net.netMargin * 1000) / 10 } %</td>
      )
    })
  }

  renderROE() {
    return Array.from(this.props.others).map(roe => {
      return (
        <td style={textStyle}>{Math.round(roe.returnOnEquity * 1000) / 10} %</td>
      )
    })
  }

  //需要修改成只要5個名額
  renderDividends() {
    if (!this.props.dividends[0]) {
      return (<tr>
        <td>dividends</td>
        <td style={textStyle}> loading </td>
        <td style={textStyle}>loading </td>
        <td style={textStyle}> loading </td>
        <td style={textStyle}> loading </td>
        <td style={textStyle}> loading </td>
      </tr>)
    }
    return (
      <tr>
        <td>dividends</td>
        <td style={textStyle}>{this.props.dividends[0].dividends / 1000000} </td>
        <td style={textStyle}>{this.props.dividends[1].dividends / 1000000} </td>
        <td style={textStyle}> {this.props.dividends[2].dividends / 1000000}</td>
        <td style={textStyle}> {this.props.dividends[3].dividends / 1000000}</td>
        <td style={textStyle}> {this.props.dividends[4].dividends / 1000000} </td>
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
            <th>USD, in millions</th>
            {this.renderDate()}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Earning per Share</td>
            {this.renderEPS()}
          </tr>
          <tr>
            <td>Free Cash Flow</td>
            {this.renderFreeCashFlow()}
          </tr>
          <tr>
            <td>Interest Coverage</td>
            {this.renderInterestCoverage()}
          </tr>
          <tr>
            <td>Net Margin</td>
            {this.renderNetMargin()}
          </tr>
          <tr>
            <td>Return on Equity</td>
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
