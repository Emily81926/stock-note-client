import React from 'react'
import { connect } from 'react-redux';
import { getGoogleUser } from '../../actions/auth'

class GoogleAuth extends React.Component {

  googleLogin = () => {
    window.open('http://localhost:3001/auth/google', "_self")
    //this.props.getGoogleUser()
  }


  render() {
    return (
      <button className="ui google plus fluid large button" type="submit" style={{ width: '90%' }} onClick={this.googleLogin} >
        <i class="google plus icon"></i>
        Google Login
        </button>
    )
  }
}


export default connect(null, { getGoogleUser })(GoogleAuth)
