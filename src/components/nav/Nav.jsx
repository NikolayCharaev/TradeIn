import React from 'react'

const Nav = () => {
  return (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <a className="nav__link" href="#">главная</a>
            </li>
            <li className="nav__item">
                <a className="nav__link" href="#">Почему мы?</a>
            </li>
            <li className="nav__item">
                <a className="nav__link" href="#">Наши услуги</a>
            </li>
            <li className="nav__item">
                <a className="nav__link" href="#">Контакты</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
