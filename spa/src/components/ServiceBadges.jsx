import geometry from '../assets/geometry.svg';
import detailing from '../assets/detailing.svg';
import sprayGun from '../assets/spray-gun.svg';
import car from '../assets/car.svg';

const services = [
  {
    icon: sprayGun,
    label: 'Покраска авто',
    description: 'Подготовка и профессиональная покраска кузова с подбором оттенка.',
  },
  {
    icon: geometry,
    label: 'Замена арок и порогов',
    description: 'Восстанавливаем и заменяем арки и пороги с антикоррозийной защитой.',
  },
  {
    icon: car,
    label: 'Кузовной ремонт и покраска коммерческого транспорта',
    description:
      'Полный цикл кузовного ремонта и окраски для фургонов, пикапов и спецтехники.',
  },
  {
    icon: detailing,
    label: 'Локальный ремонт и покраска',
    description: 'Точечно устраняем сколы и вмятины с аккуратной локальной покраской.',
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
