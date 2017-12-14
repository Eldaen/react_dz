const React = require('react')

/**
 * Link to open a modal window with the Login form
 */
class NavBarLoginLink extends React.Component {
  /**
   * render
   * @return {ReactElement} markup
   */
  render () {
    return (
      <li>
        <a href={this.props.href} data-toggle="modal" data-target="#login-modal">{this.props.text}</a>
        <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog"
          aria-labelledby="myModalLabel" aria-hidden="true">
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

/**
 * z-index bug fix
 * @type {{zIndex: number}}
 */
const dialogStyle = {
  zIndex: 1041
}

module.exports = NavBarLoginLink
