import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getGoogleUser } from '../actions/auth'
import { getCurrentUser, logOut} from '../actions/index'


class Header extends React.Component {

  componentDidMount() {
    console.log('google componentDidMount')
    this.props.getGoogleUser()
    this.props.getCurrentUser(localStorage.getItem('refreshToken'))
  }

  logout = () => {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
  
    this.props.logOut(accessToken, { token: refreshToken } )
  }


  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          BOSVA
        </Link>
        <div className="right menu">
          {this.props.user.currentUser ?
            (<div>
              <Link to="/watchlist">
                watchList
              </Link>
              <p>{this.props.user.currentUser.name}</p>
              <button onClick={this.logout}>
                logout
              </button>
            </div>
            )
            : 
              (<Link to="/signin">
                signin
              </Link>) }

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("google mapStateToProps",state.user)
  return { user: state.user }
  
}

export default connect(mapStateToProps, { getGoogleUser, logOut, getCurrentUser })(Header);


