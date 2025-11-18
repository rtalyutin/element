import services from '../data/services';
import GalleryCarousel from '../components/GalleryCarousel';
import '../styles/base.css';

const Gallery = () => (
  <section className="gallery" aria-labelledby="gallery-heading">
    <div className="gallery__intro glow-panel">
      <p className="eyebrow">Фотоархив</p>
      <h1 id="gallery-heading" className="gallery__title">
        Галерея проектов
      </h1>
      <p className="gallery__description">
        Мы фиксируем ключевые этапы ремонта, чтобы показать путь от повреждения к
        обновлённому кузову. Ниже собраны тематические секции, которые скоро пополнятся
        сериями снимков «до/после».
      </p>
    </div>
    <div className="gallery__sections" role="list">
      {services.map((service) => (
        <article
          key={service.sectionId}
          id={service.sectionId}
          className="gallery__section glow-panel"
          aria-labelledby={`${service.sectionId}-title`}
          role="listitem"
        >
          <div>
            <p className="eyebrow">Секция галереи</p>
            <h2 id={`${service.sectionId}-title`} className="gallery__section-title">
              {service.label}
            </h2>
            <p className="gallery__section-description">{service.description}</p>
          </div>
          <GalleryCarousel slides={service.slides} sectionLabel={service.label} />
        </article>
      ))}
    </div>
  </section>
);

export default Gallery;
