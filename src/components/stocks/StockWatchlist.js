import React from "react";
import { useSelector } from 'react-redux'

const StockWatchlist = () => {
  const auth = useSelector(state => state.user)
  console.log(auth)
  if(!auth.currentUser) return (<h1>Please log in!!</h1>)
  return <div> StockWatchlist</div>
};

export default StockWatchlist;