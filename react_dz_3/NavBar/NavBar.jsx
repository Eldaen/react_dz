const React = require('react')
const NavBarList = require('./NavBarList.jsx')

/**
 * Main component for the Navigatioin bar
 */
class NavBar extends React.Component {
  /**
   * render
   * @return {ReactElement} markup
   */
  render () {
    return (
      <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">React_dz_3</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <NavBarList className="nav navbar-nav navbar-right"/>
          </div>
        </div>
      </nav>
    )
  }
}

module.exports = NavBar
