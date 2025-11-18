import services from '../data/services';

const ServiceBadges = () => (
  <section className="services" id="services">
    <div className="services__wrapper">
      {services.map((service) => (
        <article key={service.label} className="service-badge glow-panel">
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
        </article>
      ))}
    </div>
  </section>
);

export default ServiceBadges;
