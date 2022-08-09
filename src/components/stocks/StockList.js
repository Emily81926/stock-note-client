import React from "react";
import { connect } from 'react-redux'
import { fetchStocks } from '../../actions'
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

class StockList extends React.Component {
  componentDidMount() {
    this.props.fetchStocks()
  }

  renderList() {
    return this.props.stocks.map(stock => {
      return (
        <div className="ui cards item" key={stock.symbol}>
          <div className="card">
            <Link to={`/stocks/${stock.symbol}`}>
              <div className="content">
                <div className="header">{stock.companyName}</div>
                <div className="meta">{stock.sector}</div>
                <div className="description">
                  {stock.price}
                </div>
              </div>
            </Link>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
    <div> 
      <SearchBar placeholder="Enter company name or symbol name" data={this.props.stocks}/>
      {this.renderList()}
      </div>)
  }

}

const mapStateToProps = state => {
  return { stocks: state.stocks }
}

export default connect(mapStateToProps, { fetchStocks })(StockList);