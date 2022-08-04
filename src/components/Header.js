import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";


const Header = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = () => {
      axios({
        method: 'GET',
        url: 'http://localhost:3001/auth/login/success',
        responseType: 'json',
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Controle-Allow-Credentials": true
        },
      })
        .then((response) => {
          console.log("first response:", response)
          console.log("status:", response.request.status)
          console.log("response.data.user", response.data.user)
          if (response.request.status === 200) return response.data.user
          throw new Error("authentication has been failed")
        }).then(resObject => {
          setUser(resObject.given_name)
        }).catch(err => {
          console.log(err)
        });
    };
    getUser()
  }, []);

  console.log("finalUser:", user)

  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        BOSVA
      </Link>
      <div className="right menu">
        {user ?
          (<div>
              <p>{user}  logout</p>
            </div>
          ) : (<Link to="/signin">
            signin
          </Link>)}


      </div>
    </div>
  );
};

export default Header;