import React from 'react'
import './login.css'

class Login extends React.Component {

  constructor(props) {
    super(props)

    this.nameRef = React.createRef()
    this.passRef = React.createRef()

    this.validateMsg = "ユーザー名とパスワードを入力してください"

    this.handleClickLogin = this.handleClickLogin.bind(this)
  }

  handleClickLogin() {
    const inputData = {
      name: this.nameRef.current.value,
      pass: this.passRef.current.value
    }
    if (!this.validate(inputData)) {
      alert(this.validateMsg)
      return false
    }

    this.props.authLogin(inputData)
  }

  validate(inputData) {
    let res = true
    if (inputData.name === "") {
      res = false
    }

    if (inputData.pass === "") {
      res = false
    }

    return res
  }

  render() {
    console.log(this.props.isAuth)
    return (
      <div class="login">
        <p id="title">Your Favorite Movies.</p>
        <div class="content">
          <p>Welcome!</p>
          <div>
            <span>user: </span>
            <input type="text" ref={this.nameRef}/>
          </div>
          <div>
            <span>password: </span>
            <input type="text" ref={this.passRef}/>
          </div>
          <button onClick={this.handleClickLogin}>login</button>
          </div>
      </div>
    )
  }
}

export default Login

