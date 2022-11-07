import { NavLink } from 'react-router-dom';

function Menu() {

  const setClassName = ({ isActive }) => isActive ? 'menu__item menu__item-active' : 'menu__item';

  return (
    <nav className="menu">
      <NavLink className={setClassName} to="/">Главная</NavLink>
      <NavLink className={setClassName} to="/drift">Дрифт-такси</NavLink>
      <NavLink className={setClassName} to="/timeattack">Time Attack</NavLink>
      <NavLink className={setClassName} to="/forza">Forza Karting</NavLink>
    </nav>
  )
}

export default Menu;
