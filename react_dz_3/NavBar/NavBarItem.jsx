const React = require('react')

class NavBarItem extends React.Component {
  render () {
    return (
      <li className={this.props.className}><a href={this.props.href}>{this.props.text}</a></li>
    )
  }
}

module.exports = NavBarItem
