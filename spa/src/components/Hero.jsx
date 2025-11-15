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
        src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=1600&q=80"
        alt="Кузов автомобиля после детального ремонта в неоновом освещении"
        loading="eager"
      />
    </div>
  </section>
);

export default Hero;
