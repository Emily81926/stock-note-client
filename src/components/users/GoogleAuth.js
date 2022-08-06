import React from 'react'
import { getGoogleUser } from '../../actions/auth'

class GoogleAuth extends React.Component {

  googleLogin = () => {
    window.open('http://localhost:3001/auth/google', "_self")
    
  }


  render() {
    return (
      <button className="loginbutton google" onClick={this.googleLogin}  >Google Login</button>
    )
  }
}



export default GoogleAuth