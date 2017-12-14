const React = require('react')
const NavBarItem = require('./NavBarItem.jsx')
const NavBarLoginLink = require('./NavBarLoginLink.jsx')

class NavBarList extends React.Component {
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
