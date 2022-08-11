import React from "react";
import { connect } from "react-redux";
import { fetchStockProfile } from "../../actions/getStock"
import { getCurrentUser } from "../../actions/index"
import { addToWatchlist, deleteFromWatchlist, getWatchlist } from "../../actions/watchlist";
import FinancialData from "./FinancialData";
import IndicatorData from "./IndicatorData"

class StockDetail extends React.Component {

  componentDidMount() {
    this.props.fetchStockProfile(this.props.match.params.symbol)
    this.props.getCurrentUser(localStorage.getItem('accessToken'))
    this.props.getWatchlist(localStorage.getItem('accessToken'))

  }

  //把symbol提供給其他的child component
  passSymbol = () => {
    return this.props.match.params.symbol
  }
 
  //在watchlist中查找此股票是否在裡面
  foundList = () => {
    const foundList = Array.from(this.props.watchlist).filter(list => list['symbol'] === this.props.match.params.symbol)

    return foundList
  }

  addToWatchlist = () => {
    const accessToken = localStorage.getItem('accessToken')
    const userId = this.props.currentUser._id
    const { symbol, companyName, sector, price } = this.props.stock
    const stock = { symbol, companyName, price, sector, userId }

    this.props.addToWatchlist(accessToken, stock)
  }

  deleteFromWatchlist = () => {
    const accessToken = localStorage.getItem('accessToken')
    const list = this.foundList()
    const watchListId = list[0]["_id"]
    console.log(list)
    console.log(watchListId)
    this.props.deleteFromWatchlist(accessToken, {  watchListId  })
  }

  renderProfile() {
    const stockProfile = this.props.stock
    if (!stockProfile) { return <h1>Loading</h1>; }

    const foundList = Array.from(this.props.watchlist).filter(list => list['symbol'] === this.props.match.params.symbol)


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
          {foundList.length === 0 ?
            <button className="ui button" onClick={this.addToWatchlist}>Add to watchlist</button> :
            <button className="ui button" onClick={this.deleteFromWatchlist}>Delete from watchlist</button>}
        </div>
      </div>
    )
  };

  render() {
    return (
      <div>
        {this.renderProfile()}
        <FinancialData symbol={this.passSymbol()} />
        <IndicatorData symbol={this.passSymbol()} />
      </div>

    )
  }
};


const mapStateToProps = (state) => {
  const { symbol, companyName, sector, website, description, price } = state.profile
  return {
    stock: { symbol, companyName, sector, website, description, price },
    currentUser: state.user.currentUser,
    watchlist: state.watchlist
  }
  //此處的意思是，我要做一個以stock為key的 key value pair，然後資料要從state.stocks裡面的第0個資料取得，所以state.stocks[0]這部分很重要！！！(I JUST WANT TO GET SOME VALUES IN THE OBJECT AS RPOPS)
}

export default connect(mapStateToProps, { fetchStockProfile, getCurrentUser, addToWatchlist, deleteFromWatchlist, getWatchlist })(StockDetail);