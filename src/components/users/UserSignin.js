import React from "react";
import { Link } from 'react-router-dom'
import GoogleAuth from "./GoogleAuth";

class UserSignin extends React.Component {
  render() {
    return (
      <div className="ui">
        <Link to="/" className="button">
        </Link>
        <GoogleAuth/>
      </div>
    )
  }
};

export default UserSignin;