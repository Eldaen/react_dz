import {Link} from 'react-router-dom'
import React from 'react'

export class Home extends React.PureComponent {
  render () {
    return (
      <div>
        <header><h1>HOME</h1></header>
        <menu>
          <ul>
            <li><Link to="/blogs">Блоги</Link></li>
            <li><Link to="/users">Пользователи</Link></li>
          </ul>
        </menu>
      </div>
    )
  }
}
