import React from "react";
import { connect } from 'react-redux'
import { fetchStocks } from '../../actions'

class StockList extends React.Component {
  componentDidMount(){
    this.props.fetchStocks()
  }

  renderList(){
    return this.props.stocks.map(stock => {
      return(
        <div className="ui cards item" key={stock.id}>
          <div className="card">
            <div className="content">
              <div className="header">{stock.companyName}</div>
              <div className="meta">{stock.sector}</div>
              <div className="description">
                {stock.price}
              </div>
            </div>
          </div>
      </div>
      );
    });
  }

  render() {
    return <div> {this.renderList()}</div>
  }
 
}

const mapStateToProps = state => {
  return { stocks: state.stocks }
}

export default connect( mapStateToProps, { fetchStocks })(StockList);