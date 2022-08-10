import React from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { getWatchlist } from "../../actions/watchlist"



class StockWatchlist extends React.Component {

  componentDidMount() {
    const accessToken = localStorage.getItem('accessToken')
    this.props.getWatchlist(accessToken)
  }

  renderWatchlist() {
    return (
      Array.from(this.props.watchList).map(list => {
        return (
          <div className="ui cards item" key={list.symbol}>
            <div className="card">
              <Link to={`/stocks/${list.symbol}`}>
                <div className="content">
                  <div className="header">{list.companyName}</div>
                  <div className="meta">{list.sector}</div>
                  <div className="description">
                    {list.price}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      })
    )
  }

  render() {
    const watchlist = this.props.watchList
    if (!watchlist) {
      return <h1>Loading</h1>;
    }
    return (
      <div>
        {this.renderWatchlist()}
      </div>)

  }
}

const mapStateToProps = state => {
  return {
    watchList: state.watchlist
  }
}

export default connect(mapStateToProps, { getWatchlist })(StockWatchlist);