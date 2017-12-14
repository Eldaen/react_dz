const React = require('react')

/**
 * Article block
 */
class Article extends React.Component {
  /**
   * render
   * @return {ReactElement} markup
   */
  render () {
    return (
      <div className="article">
        <h2 className="article__header">{this.props.title}</h2>
        <p className="article__preview">{this.props.text}
          <a href={this.props.href} className="article__read-more btn btn-info">Читать дальше</a></p>
      </div>
    )
  }
}

module.exports = Article
