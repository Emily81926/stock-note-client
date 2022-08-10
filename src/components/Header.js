import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getGoogleUser } from '../actions/auth'
import { getCurrentUser, logOut } from '../actions/index'


class Header extends React.Component {

  componentDidMount() {
    console.log('google componentDidMount')
    this.props.getGoogleUser()
    this.props.getCurrentUser(localStorage.getItem('accessToken'))
  }

  logout = () => {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')

    this.props.logOut(accessToken, { token: refreshToken })
  }


  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          BOSVA
        </Link>
        <div className="right menu">
          {this.props.currentUser.currentUser ?
            (<div>
              <Link to="/watchlist"  >
                watchList
              </Link>
              <p>{this.props.currentUser.currentUser.name}</p>
              <button onClick={this.logout}>
                logout
              </button>
            </div>
            )
            :
            (<Link to="/signin">
              signin
            </Link>)}

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


