import { Link, NavLink, useLocation } from 'react-router-dom';
import phoneIcon from '../assets/phone.svg';

const anchorLinks = [
  { hash: '#services', label: 'Услуги' },
  { hash: '#pricing', label: 'Цены' },
  { hash: '#gallery', label: 'Галерея' },
  { hash: '#contacts', label: 'Контакты' },
];

const Header = () => {
  const location = useLocation();

  const getAnchorClassName = (hash) => {
    const isActive = location.pathname === '/' && location.hash === hash;
    return `header__link${isActive ? ' header__link--active' : ''}`;
  };

  return (
    <header className="header" role="banner">
      <div className="header__container">
        <Link
          className="header__brand"
          to="/"
          aria-label="МАСТЕРСКАЯ - перейти к началу страницы"
        >
          <span className="header__brand-accent">МЯ</span>
          <span>ТЫЙ ЭЛЕМЕНТ</span>
        </Link>
        <nav className="header__nav" aria-label="Основная навигация">
          {anchorLinks.map((link) => (
            <Link
              key={link.hash}
              className={getAnchorClassName(link.hash)}
              to={{ pathname: '/', hash: link.hash }}
            >
              {link.label}
            </Link>
          ))}
          <NavLink
            to="/visualizations"
            className={({ isActive }) =>
              `header__link header__link--cta${isActive ? ' header__link--active' : ''}`
            }
          >
            Визуализации
          </NavLink>
        </nav>
        <a className="header__phone" href="tel:+74951234567">
          <span className="header__phone-icon" aria-hidden="true">
            <img src={phoneIcon} alt="" />
          </span>
          <span className="header__phone-text">
            <span className="header__phone-label">Звоните ежедневно</span>
            <span className="header__phone-number">+7 (980) 156-01-07</span>
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
