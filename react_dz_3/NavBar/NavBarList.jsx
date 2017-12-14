const React = require('react')
require('./NavBarItem.jsx')

class NavBarList extends React.Component {
  render () {
    return (
      <ul className={this.props.className}>
        <NavBarItem className="active" text="Home" href="#"/>
        <NavBarItem text="About" href="#"/>
        <NavBarItem text="Contact" href="#"/>
        <NavBarItem text="Login" href="#"/>
      </ul>
    )
  }
}

module.exports = NavBarList
