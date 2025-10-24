const Header = () => (
  <header className="layout__header">
    <a className="layout__brand" href="#hero" aria-label="Перейти к началу страницы">
      <span className="layout__brand-mark">Мастерская</span>
      <span className="layout__brand-name">Мятый Элемент</span>
    </a>
    <nav className="layout__nav" aria-label="Основная навигация">
      <a href="#services">Услуги</a>
      <a href="#pricing">Цены</a>
      <a href="#gallery">Галерея</a>
      <a href="#contacts">Контакты</a>
    </nav>
    <a className="button button--outline layout__cta" href="#contacts">
      Заказать
    </a>
  </header>
);

export default Header;
