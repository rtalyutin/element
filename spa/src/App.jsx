import Header from './components/Header';
import Hero from './components/Hero';
import ServiceBadges from './components/ServiceBadges';
import Footer from './components/Footer';
import './styles/base.css';

const App = () => (
  <div className="page">
    <Header />
    <main className="page__main">
      <Hero />
      <ServiceBadges />
      <section
        className="section-placeholder glow-panel"
        id="pricing"
        aria-labelledby="pricing-heading"
      >
        <h2 id="pricing-heading">Цены</h2>
        <p>
          Прайс-лист в разработке — мы формируем прозрачные пакеты услуг под каждый кейс.
        </p>
      </section>
      <section
        className="section-placeholder glow-panel"
        id="gallery"
        aria-labelledby="gallery-heading"
      >
        <h2 id="gallery-heading">Галерея</h2>
        <p>
          Подбираем лучшие истории восстановления. Галерея появится после фотосессии
          свежих проектов.
        </p>
      </section>
    </main>
    <Footer />
  </div>
);

export default App;
