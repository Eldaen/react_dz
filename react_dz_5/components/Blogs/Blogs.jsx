import {Link} from 'react-router-dom'
import React from 'react'

export class Blogs extends React.PureComponent {
  render () {
    return (
      <div>
        <header><h1>HOME</h1></header>
        <menu>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/users">Пользователи</Link></li>
          </ul>
        </menu>
        <div>
          <h2>Страница со всеми записями</h2>
        </div>
      </div>
    )
  }
}
