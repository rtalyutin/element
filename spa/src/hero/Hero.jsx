import hero from './config.json';

const Hero = () => {
  const { brand, name, service, tagline, description, actions, badges } = hero;

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__brand" aria-label={brand}>
            {brand}
          </p>
          <h1 className="hero__title" id="hero-title">
            <span className="hero__name">{name}</span>
            <span className="hero__service">{service}</span>
          </h1>
          <p className="hero__tagline">{tagline}</p>
          <p className="hero__description">{description}</p>
          <div className="hero__actions" role="group" aria-label="Основные действия">
            <a
              className="button button--primary hero__button"
              href={actions.primary.href}
            >
              {actions.primary.label}
            </a>
            <a
              className="button button--ghost hero__button"
              href={`tel:${actions.secondary.phone.replace(/[^\d+]/g, '')}`}
              aria-label={`Позвонить в мастерскую ${name}`}
            >
              {actions.secondary.label}
            </a>
          </div>
          <ul className="hero__badges" aria-label="Основные направления">
            {badges.map((item) => (
              <li key={item} className="hero__badge">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__spraygun" />
          <div className="hero__car">
            <div className="hero__car-body" />
            <div className="hero__car-wheel hero__car-wheel--front" />
            <div className="hero__car-wheel hero__car-wheel--rear" />
          </div>
          <div className="hero__cable" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
