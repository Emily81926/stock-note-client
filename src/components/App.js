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
    <BrowserRouter >
      <Header />

      <div className='ui container'>
        <Route path="/" exact component={StockList} />
        <Route path="/watchlist" exact component={StockWatchlist} />
        <Route path="/stocks/:symbol" exact component={StockDetail} />
        <Route path="/signin" exact component={UserSignin} />
        <Route path="/signup" exact component={UserSignup} />

      </div>
    </BrowserRouter>
  );
};

export default App;