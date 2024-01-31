import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " header__nav-item header__nav-item_active"
                  : "header__nav-item"
              }
            >
              Все котики
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/save-cats"
              className={({ isActive }) =>
                isActive
                  ? "header__nav-item header__nav-item_active"
                  : "header__nav-item"
              }
            >
              Любимые котики
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
