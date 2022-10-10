import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getGoogleUser } from "../actions/auth";
import { fetchStocks } from "../actions/index";
import { getCurrentUser, logOut } from "../actions/index";
import Searching from "./stocks/Search";

class Header extends React.Component {
  componentDidMount() {
    console.log("google componentDidMount");
    if (!localStorage.getItem("accessToken")) {
      return this.props.getGoogleUser();
    }

    this.props.getCurrentUser(localStorage.getItem("accessToken"));
    this.props.fetchStocks();
  }

  logout = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    await this.props.logOut(accessToken, { token: refreshToken });
    window.location.href = "https://sprightly-melba-edee81.netlify.app";
  };

  render() {
    return (
      <div className="ui borderless fixed teal inverted massive menu">
        {/* <div className="ui borderless teal inverted menu"> */}
        <div className="ui container grid">
          <Link to="/" className="ui medium header item">
            BOSVA
          </Link>
        
          {/* <div className="right menu" style={{ float: "right"}}> */}
             <div className="ui item searchbar" style={{ margin: "auto 0 auto auto"}}>
              <Searching
                placeholder="Enter company name"
                data={this.props.stocks}
              />
            </div>
            {this.props.currentUser.currentUser ? (
              <React.Fragment>
                <Link to="/watchlist" className="ui item" style={{position: 'float', right: '10px'}}>
                  Watchlist
                </Link>
                <Link to="/" className="ui item">
                  {this.props.currentUser.currentUser.name}
                </Link>
                <div className="item">
                  <button className="ui mini red button" onClick={this.logout}>
                    Log Out
                  </button>
                </div>
              </React.Fragment>
            ) : (
              <Link to="/signin" className="ui medium header item">
                Sign In
              </Link>
            )}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("google mapStateToProps", state.user);
  return { currentUser: state.user, stocks: state.stocks };
};

export default connect(mapStateToProps, {
  getGoogleUser,
  logOut,
  getCurrentUser,
  fetchStocks,
})(Header);
