import phoneIcon from '../assets/phone.svg';

const Header = () => (
  <header className="header" role="banner">
    <div className="header__container">
      <a
        className="header__brand"
        href="#hero"
        aria-label="МАСТЕРСКАЯ - перейти к началу страницы"
      >
        <span className="header__brand-accent">МА</span>
        <span>СТЕРСКАЯ</span>
      </a>
      <nav className="header__nav" aria-label="Основная навигация">
        <a className="header__link" href="#services">
          Услуги
        </a>
        <a className="header__link" href="#pricing">
          Цены
        </a>
        <a className="header__link" href="#gallery">
          Галерея
        </a>
        <a className="header__link" href="#contacts">
          Контакты
        </a>
      </nav>
      <a className="header__phone" href="tel:+74951234567">
        <span className="header__phone-icon" aria-hidden="true">
          <img src={phoneIcon} alt="" />
        </span>
        <span className="header__phone-text">
          <span className="header__phone-label">Звоните ежедневно</span>
          <span className="header__phone-number">+7 (495) 123-45-67</span>
        </span>
      </a>
    </div>
  </header>
);

export default Header;
