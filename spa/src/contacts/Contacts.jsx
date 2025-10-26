import Section from '../components/Section';
import contacts from './config.json';

const Contacts = () => (
  <Section id="contacts" title={contacts.title} description={contacts.description}>
    <div className="contacts">
      <div className="contacts__details">
        <dl className="contacts__list">
          <dt className="contacts__term">Адрес</dt>
          <dd className="contacts__definition">{contacts.address}</dd>
          <dt className="contacts__term">Телефон</dt>
          <dd className="contacts__definition">
            <a
              href={`tel:${contacts.phone.replace(/[^\d+]/g, '')}`}
              aria-label="Позвонить в мастерскую"
            >
              {contacts.phone}
            </a>
          </dd>
          <dt className="contacts__term">Email</dt>
          <dd className="contacts__definition">
            <a
              href={`mailto:${contacts.email}`}
              aria-label="Написать письмо в мастерскую"
            >
              {contacts.email}
            </a>
          </dd>
        </dl>
      </div>
      <div className="contacts__meta">
        <h3 className="contacts__meta-title">График работы</h3>
        <ul className="contacts__schedule">
          {contacts.schedule.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a
          className="button button--secondary contacts__cta"
          href={contacts.cta.href}
          target="_blank"
          rel="noreferrer"
        >
          {contacts.cta.label}
        </a>
      </div>
    </div>
  </Section>
);

export default Contacts;
