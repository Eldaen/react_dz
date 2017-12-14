const React = require('react')

/**
 * Menu item
 */
class NavBarItem extends React.Component {
  /**
   * render
   * @return {ReactElement} markup
   */
  render () {
    return (
      <li className={this.props.className}>
        <a href={this.props.href}>{this.props.text}</a>
      </li>
    )
  }
}

module.exports = NavBarItem
