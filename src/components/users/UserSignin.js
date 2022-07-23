import React from "react";
import { Link } from 'react-router-dom'
import FacebookAuth from "./FacebookAuth";
import GoogleAuth from "./GoogleAuth";

class UserSignin extends React.Component {
  render() {
    return (
      <div className="ui">
        <Link to="/" className="button">
          Sign in with Facebook
        </Link>
        <FacebookAuth />
        <GoogleAuth/>
      </div>
    )
  }
};

export default UserSignin;