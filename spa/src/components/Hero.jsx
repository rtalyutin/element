import ActionButtons from './ActionButtons';

const Hero = () => (
  <section className="hero" id="hero">
    <div className="hero__background" role="presentation" aria-hidden="true">
      <video
        className="hero__background-video"
        src="https://s3.twcstorage.ru/e9dc5ea4-6dc9267d-85ca-4ae9-a41f-2895e9542a04/video_2025-11-15_18-06-54.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
    </div>
    <div className="hero__content">
      <p className="hero__tagline">Мастерская</p>
      <h1 className="hero__title">
        <span className="hero__title-brand">Мятый элемент</span>
        <span className="hero__title-highlight">Кузовной ремонт</span>
      </h1>
      <p className="hero__description">
        От царапки до тотала восстановим заводской блеск.
      </p>
      <ActionButtons />
      <span id="booking" className="visually-hidden" aria-hidden="true" />
    </div>
  </section>
);

export default Hero;
