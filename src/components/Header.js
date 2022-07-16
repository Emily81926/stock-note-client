import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to ="/" className="item">
        BOSVA
      </Link>
      <div className="right menu">
      <Link to="/signin">
        signin
      </Link>
      </div>
    </div>
  );
};

export default Header;