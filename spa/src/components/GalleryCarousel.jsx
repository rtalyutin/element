import { useEffect, useId, useRef, useState } from 'react';

const GalleryCarousel = ({ slides, sectionLabel }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef(null);
  const carouselId = useId();
  const aspectRatio = 4 / 3;
  const defaultWidth = 960;

  useEffect(() => {
    if (!viewportRef.current) {
      return undefined;
    }

    const node = viewportRef.current;
    const setWidthFromNode = () => {
      const rect = node.getBoundingClientRect();
      const nextWidth = Math.round(rect.width);
      setViewportWidth((prev) => (prev === nextWidth ? prev : nextWidth));
    };

    setWidthFromNode();

    if (typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const observer = new ResizeObserver(([entry]) => {
      if (!entry?.contentRect) {
        return;
      }
      const nextWidth = Math.round(entry.contentRect.width);
      setViewportWidth((prev) => (prev === nextWidth ? prev : nextWidth));
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!slides.length) {
    return null;
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const computedWidth = viewportWidth || defaultWidth;
  const computedHeight = Math.round(computedWidth / aspectRatio);
  const responsiveSizes = '(max-width: 600px) 92vw, (max-width: 1200px) 80vw, 960px';

  return (
    <div
      className="gallery-carousel"
      aria-roledescription="carousel"
      aria-label={`Карусель для раздела ${sectionLabel}`}
    >
      <div className="gallery-carousel__viewport" ref={viewportRef}>
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
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                width={computedWidth}
                height={computedHeight}
                sizes={responsiveSizes}
              />
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
