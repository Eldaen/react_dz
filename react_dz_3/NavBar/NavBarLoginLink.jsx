const React = require('react')

class NavBarLoginLink extends React.Component {
  render () {
    return (
      <li>
        <a href={this.props.href} data-toggle="modal" data-target="#login-modal">{this.props.text}</a>
        <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog"
          aria-labelledby="myModalLabel" aria-hidden="true"
          style={divStyle}>
          <div className="modal-dialog" style={dialogStyle}>
            <div className="loginmodal-container">
              <h1>Login to Your Account</h1><br/>
              <form>
                <input type="text" name="user" placeholder="Username"/>
                <input type="password" name="pass" placeholder="Password"/>
                <input type="submit" name="login" className="login loginmodal-submit" value="Login"/>
              </form>
              <div className="login-help">
                <a href="#">Register</a> - <a href="#">Forgot Password</a>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

const divStyle = {
  display: 'none'
}
const dialogStyle = {
  zIndex: 1041
}

module.exports = NavBarLoginLink
