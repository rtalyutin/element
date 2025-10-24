import contacts from '../contacts/config.json';

const Footer = () => (
  <footer className="layout__footer">
    <div className="layout__footer-brand">
      <span className="layout__footer-mark">Мастерская</span>
      <span className="layout__footer-name">Мятый Элемент</span>
    </div>
    <div className="layout__footer-meta">
      <a
        href={`tel:${contacts.phone.replace(/[^\d+]/g, '')}`}
        className="layout__footer-link"
      >
        {contacts.phone}
      </a>
      <a href={`mailto:${contacts.email}`} className="layout__footer-link">
        {contacts.email}
      </a>
      <address className="layout__footer-address">{contacts.address}</address>
    </div>
    <p className="layout__footer-copy">
      © {new Date().getFullYear()} Мастерская «Мятый Элемент». Все права защищены.
    </p>
  </footer>
);

export default Footer;
