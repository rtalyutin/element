const Footer = () => (
  <footer className="footer" id="contacts">
    <div className="footer__content">
      <div>
        <h2 className="footer__title">Связаться с нами</h2>
        <p className="footer__subtitle">Москва, СВАО, ул. Транспортная, 12</p>
      </div>
      <div className="footer__links">
        <a href="tel:+74951234567" className="footer__link">
          +7 (495) 123-45-67
        </a>
        <a href="mailto:service@myaty-element.ru" className="footer__link">
          service@myaty-element.ru
        </a>
      </div>
    </div>
    <p className="footer__legal">
      © {new Date().getFullYear()} Мастерская «Мятый элемент». Все права защищены.
    </p>
  </footer>
);

export default Footer;
