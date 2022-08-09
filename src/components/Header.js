import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getGoogleUser, logOut } from '../actions/auth'
import { getCurrentUser} from '../actions/index'


class Header extends React.Component {

  componentDidMount() {
    console.log('google componentDidMount')
    this.props.getGoogleUser()
    this.props.getCurrentUser(localStorage.getItem('refreshToken'))
  }

  logout = () => {
    this.props.logOut(this.props.user)
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
              <p onClick={this.logout}>
                logout
              </p>
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


