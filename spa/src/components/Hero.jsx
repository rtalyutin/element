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
      <img
        className="hero__artwork"
        src="https://s3.twcstorage.ru/e9dc5ea4-6dc9267d-85ca-4ae9-a41f-2895e9542a04/photo_2025-11-03_20-57-56.jpg"
        alt="Кузов автомобиля после детального ремонта в неоновом освещении"
        loading="eager"
      />
    </div>
  </section>
);

export default Hero;
