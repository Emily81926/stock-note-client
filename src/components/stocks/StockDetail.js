import React from "react";
import { connect } from "react-redux";
import { fetchStockProfile } from "../../actions/getStock"
import FinancialData from "./FinancialData";

class StockDetail extends React.Component {
  
  componentDidMount() {
    this.props.fetchStockProfile(this.props.match.params.symbol)
  }
  
  //把symbol提供給其他的child component
  passSymbol = () => {
    return this.props.match.params.symbol
  }
  //需修改裡面的內容
  renderProfile() {
    const stockProfile = this.props.stock
    if (!stockProfile) { return null; }

    return (
      <div className="ui card" key={stockProfile.symbol}>
        <div className="content">
          <div className="header">{stockProfile.companyName}</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">{stockProfile.sector}</h4>
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary">
                  website: {stockProfile.website}
                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">

                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                  description: {stockProfile.description}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <button className="ui button">Add to watchlist</button>
        </div>
      </div>
    )
  };

  render() {
    return (
      <div>{this.renderProfile()}
        <FinancialData symbol={this.passSymbol()}/>
      </div>

    )
  }
};


const mapStateToProps = (state) => {
  return { stock: state.profile[0]}
  //此處的意思是，我要做一個以stock為key的 key value pair，然後資料要從state.stocks裡面的第0個資料取得，所以state.stocks[0]這部分很重要！！！
}

export default connect(mapStateToProps, { fetchStockProfile })(StockDetail);