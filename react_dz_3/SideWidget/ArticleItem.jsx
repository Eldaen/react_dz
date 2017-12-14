const React = require('react')

/**
 * Widget article item
 */
class ArticleItem extends React.Component {
  /**
   * render
   * @return {ReactElement} markup
   */
  render () {
    return (
      <article className="widget__article"><a href={this.props.href} className="widget__article-header">{this.props.title}</a>
        <p className="widget__article-data">
          <span className="widget__article-date">{this.props.date} </span>
          <a href={this.props.authorHref} className="widget__article-author">{this.props.author}</a>
        </p>
      </article>
    )
  }
}

module.exports = ArticleItem
