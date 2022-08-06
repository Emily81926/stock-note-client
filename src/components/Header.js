import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getGoogleUser } from '../actions/auth'

class Header extends React.Component {

  componentDidMount() {
    console.log('google componentDidMount')
    this.props.getGoogleUser()
  }

  logout = () => {
    window.open('http://localhost:3001/auth/logout')
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
              <p>{this.props.user.currentUser.name}</p>
              <p onClick={this.logout}>
                logout
              </p>
            </div>
            ) : (<Link to="/signin">
              signin
            </Link>)}

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("google mapStateToProps",state.user)
  return { user: state.user }
  
}

export default connect(mapStateToProps, { getGoogleUser })(Header);


