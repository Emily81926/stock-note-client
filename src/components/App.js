import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StockList from './stocks/StockList';
import StockDetail from './stocks/StockDetail';
import StockWatchlist from './stocks/StockWatchlist';
import UserSignin from './users/UserSignin';
import UserSignup from './users/Usersignup';
import Header from './Header'


const App = () => {
  return (
  <div className='ui container'>
    <BrowserRouter>
        <Header/>
        <Route path="/" exact component={StockList}/>
        <Route path="/stocks/show" exact component={StockDetail} />
        <Route path="/stocks/watchlist" exact component={StockWatchlist} />
        <Route path="/signin" exact component={UserSignin} />
        <Route path="/signup" exact component={UserSignup} />
    </BrowserRouter>
    </div>
    ); 
};

export default App;