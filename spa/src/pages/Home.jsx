import Hero from '../components/Hero';
import ServiceBadges from '../components/ServiceBadges';

const Home = () => (
  <>
    <Hero />
    <ServiceBadges />
    <section
      className="section-placeholder glow-panel"
      id="pricing"
      aria-labelledby="pricing-heading"
    >
      <h2 id="pricing-heading">Цены</h2>
      <p>
        Прайс-лист в разработке — мы формируем прозрачные пакеты услуг под каждый
        кейс.
      </p>
    </section>
    <section
      className="section-placeholder glow-panel"
      id="gallery"
      aria-labelledby="gallery-heading"
    >
      <h2 id="gallery-heading">Галерея</h2>
      <p>
        Подбираем лучшие истории восстановления. Галерея появится после
        фотосессии свежих проектов.
      </p>
    </section>
  </>
);

export default Home;
