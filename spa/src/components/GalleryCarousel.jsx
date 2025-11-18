import { useId, useState } from 'react';

const GalleryCarousel = ({ slides, sectionLabel }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselId = useId();

  if (!slides.length) {
    return null;
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="gallery-carousel"
      aria-roledescription="carousel"
      aria-label={`Карусель для раздела ${sectionLabel}`}
    >
      <div className="gallery-carousel__viewport">
        <div
          className="gallery-carousel__track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <figure
              key={slide.id}
              className="gallery-carousel__slide"
              aria-label={`${index + 1} из ${slides.length}`}
            >
              <img src={slide.image} alt={slide.title} loading="lazy" />
              <figcaption>
                <p className="gallery-carousel__slide-eyebrow">{slide.title}</p>
                <p className="gallery-carousel__slide-caption">{slide.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="gallery-carousel__controls">
        <button type="button" className="gallery-carousel__button" onClick={handlePrev}>
          Назад
        </button>
        <div className="gallery-carousel__dots" role="tablist" aria-controls={carouselId}>
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              className={`gallery-carousel__dot ${index === activeIndex ? 'is-active' : ''}`}
              aria-label={`Показать слайд ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button type="button" className="gallery-carousel__button" onClick={handleNext}>
          Вперёд
        </button>
      </div>
    </div>
  );
};

export default GalleryCarousel;
