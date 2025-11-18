import { Link } from 'react-router-dom';
import services from '../data/services';

const ServiceBadges = () => (
  <section className="services" id="services">
    <div className="services__wrapper">
      {services.map((service) => (
        <article key={service.sectionId} className="service-badge">
          <Link
            className="service-badge__link glow-panel"
            to={{ pathname: '/gallery', hash: service.sectionId }}
            aria-label={`Перейти в галерею к разделу «${service.label}»`}
          >
            <img
              className="service-badge__icon"
              src={service.icon}
              alt=""
              aria-hidden="true"
            />
            <div>
              <h3 className="service-badge__title">{service.label}</h3>
              <p className="service-badge__description">{service.description}</p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  </section>
);

export default ServiceBadges;
