import React from "react";
import { connect } from 'react-redux'
import { fetchStocks } from '../../actions'

class StockList extends React.Component {
  componentDidMount(){
    this.props.fetchStocks()
  }

  render() {
    return <div> StockList</div>
  }
}

export default connect(null, { fetchStocks })(StockList);