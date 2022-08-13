import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getGoogleUser } from '../actions/auth'
import { getCurrentUser, logOut } from '../actions/index'


class Header extends React.Component {

  componentDidMount() {
    console.log('google componentDidMount')
    if (!localStorage.getItem('accessToken')) { return this.props.getGoogleUser() }

    this.props.getCurrentUser(localStorage.getItem('accessToken'))
  }

  logout = () => {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')

    this.props.logOut(accessToken, { token: refreshToken })
  }


  render() {
    return (
      <div className="ui fixed borderless teal inverted huge menu">
        <div className="ui container grid">
          <Link to="/" className="ui medium header item">
            BOSVA
          </Link>
          <div className="right menu">
            {this.props.currentUser.currentUser ?
              (
                <React.Fragment>
                  <Link to="/watchlist" className="ui item">Watchlist</Link>
                  <Link to="/" className="ui item">{this.props.currentUser.currentUser.name}</Link>
                  <div className="item">
                    <button className="ui mini red button" onClick={this.logout}>
                      Log Out
                    </button>
                  </div>
                  
                </React.Fragment>
              )
              :
              (<Link to="/signin" className="ui medium header item">
                Sign In
              </Link>)}

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("google mapStateToProps", state.user)
  return { currentUser: state.user }

}

export default connect(mapStateToProps, { getGoogleUser, logOut, getCurrentUser })(Header);


