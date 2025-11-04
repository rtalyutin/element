import geometry from '../assets/geometry.svg';
import detailing from '../assets/detailing.svg';
import insurance from '../assets/insurance.svg';
import beforeAfter from '../assets/before-after.svg';

const services = [
  {
    icon: geometry,
    label: 'Ремонт геометрии',
    description: 'Вытяжка кузова, стапель и усиленные работы',
  },
  {
    icon: detailing,
    label: 'Детейлинг',
    description: 'Полировка, защитные покрытия и уход',
  },
  {
    icon: insurance,
    label: 'Страховые кейсы',
    description: 'Берём весь документооборот на себя',
  },
  {
    icon: beforeAfter,
    label: 'Фото до/после',
    description: 'Прозрачный отчёт по этапам ремонта',
  },
];

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
