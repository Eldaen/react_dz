const React = require('react')
const NavBarItem = require('./NavBarItem.jsx')
const NavBarLoginLink = require('./NavBarLoginLink.jsx')

/**
 * List of the NavBar items
 */
class NavBarList extends React.Component {
  /**
   * render
   * @return {ReactElement} markup
   */
  render () {
    return (
      <ul className={this.props.className}>
        <NavBarItem className="active" text="Home" href="#"/>
        <NavBarItem text="About" href="#"/>
        <NavBarItem text="Contact" href="#"/>
        <NavBarLoginLink text="Login" href="#"/>
      </ul>
    )
  }
}

module.exports = NavBarList
