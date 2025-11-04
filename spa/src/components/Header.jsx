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
      <a
        className="button button--primary button--sm"
        href="#booking"
        aria-label="Открыть форму заказа"
      >
        Заказать
      </a>
    </div>
  </header>
);

export default Header;
