import React from 'react';
import './login.css';

const Login = (props) => {

  const authLogin = () => {
    console.log("authLogin")
  }

  return (
    <div>
      <p>Login</p>
      <div>
        <span>user</span>
        <input type="text" />
      </div>
      <div>
        <span>password</span>
        <input type="text" />
      </div>
      <button onClick={authLogin}>login</button>
    </div>
  );
}

export default Login

