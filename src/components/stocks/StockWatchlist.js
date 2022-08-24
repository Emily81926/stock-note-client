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
    const card = {
      width: '100%',
      height: '125px',
      margin: 'auto'
    }

    const content = {
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center'
    }

    return (
      Array.from(this.props.watchList).map(stock => {
        return (
          <div className="ui cards item" style={card} key={stock.symbol} >
            <div className="blue card" style={card}>
              <Link to={`/stocks/${stock.symbol}`}>
                <div className="content" style={content}>
                  <div className="center aligned header" style={{ marginBottom: '15px' }}>
                    <h4>{stock.companyName}</h4>
                  </div>
                  <div className="center aligned meta" style={{ marginBottom: '10px' }}>
                    <span className="category">{stock.sector}</span>
                  </div>
                  <div className="extra content">
                    <div className="center aligned floated dollar">
                      <i className="dollar sign icon"></i>
                      {stock.price}
                    </div>
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
    console.log(watchlist)
    if (!watchlist) {
      return <h1>Loading</h1>;  
    }

    if(watchlist.length === 0){
      return (
        <div className="emptyMessage" style={{paddingTop: '150px', textAlign: 'center'}}>
      <h1>Your Watchlist is Empty</h1>
        </div>
      )
    }

    const cardWrapper = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      width: '100 %',
      gridGap: '1.5rem',
      paddingTop: '100px'
    }

    return (
      <div className="ui container" style={cardWrapper}>
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