import React from "react";
import { connect } from 'react-redux'
import { fetchStocks } from '../../actions'
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import photo from "../../assets/coverPhoto.jpeg"

class StockList extends React.Component {
  componentDidMount() {
    this.props.fetchStocks()
  }

  renderList() {
    const card = {
    width: '100%',
    height: '125px',
    /*超出容器的圖片隱藏*/
    margin: 'auto'
    }

    const content = {
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center'
    }

    return this.props.stocks.map(stock => {
      return (
        <div className="ui cards item" style={card} key={stock.symbol} >
          <div className="blue card" style={card}>
            <Link to={`/stocks/${stock.symbol}`}>
              <div className="content" style={content}>
                <div className="center aligned header" style={ {marginBottom: '15px'}}>
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
    });
  }

  render() {
    //圖片的style
    const mainStyle = {
      margin: '0',
      padding: '0',
      height: '100vh',
      fontFamily: 'Arial, Helvetica, sans-serif'
    }

    const imageStyle = {
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(/coverPhoto.jpeg)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80%',
      backgroudPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }

    const text = {
      position: 'absolute',
      top: '70px',
      color: '#fff',
      margin: '30px',
      textAlign: 'justify-all',
    }

    const h3 = {  
      fontSize: '30px',
      fontWeight: '500',
      textAlign: 'left',
      fontStyle: 'italic'
    }

    const h2 = {
      fontSize: '20px',
      fontWeight: '500',
      textAlign: 'right',
      verticalAlign: 'text-bottom'
    }

    const cardWrapper = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      width: '100 %',
      gridGap: '1.5rem',
      paddingTop: '100px'
    }

    return (
      <div className="main" style={mainStyle}>
        <div className="image-container" style={imageStyle}>
          <div className="inner-container" style={text}>
            <h3 style={h3}>“The stock market is a device to transfer money from the impatient to the patient.”</h3>
            <h2 style={h2}>~Warren Buffett</h2>
          </div>
        </div>

       
          <div className="ui container" style={{ paddingTop: '100px' }}>
            <SearchBar placeholder="Enter company name or symbol name" data={this.props.stocks} />
          </div>
          <div className="ui container" style={cardWrapper}>
           
              {this.renderList()}
            </div>
          
       
      </div>)
  }

}

const mapStateToProps = state => {
  return {
    stocks: state.stocks,
  }
}

export default connect(mapStateToProps, { fetchStocks })(StockList);