import React from 'react'

class Logout extends React.Component {

  constructor(props) {
    super(props)
    this.handleClickLogout = this.handleClickLogout.bind(this)
  }

  handleClickLogout() {
    console.log("logout")
    this.props.logout()
  }

  render() {
    return (
      <div onClick={this.handleClickLogout}>
        <p id="log-out">Log out</p>
      </div>
    )
  }
}

export default Logout

