import ActionButtons from './ActionButtons';
import geometryIcon from '../assets/geometry.svg';
import insuranceIcon from '../assets/insurance.svg';
import beforeAfterIcon from '../assets/before-after.svg';

const Hero = () => (
  <section className="hero" id="hero">
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
      <ul className="hero__features" aria-label="Ключевые направления работы">
        <li className="hero__feature">
          <span className="hero__feature-icon" aria-hidden="true">
            <img src={geometryIcon} alt="" />
          </span>
          <span>Ремонт геометрии</span>
        </li>
        <li className="hero__feature">
          <span className="hero__feature-icon" aria-hidden="true">
            <img src={insuranceIcon} alt="" />
          </span>
          <span>Страховые кейсы</span>
        </li>
        <li className="hero__feature">
          <span className="hero__feature-icon" aria-hidden="true">
            <img src={beforeAfterIcon} alt="" />
          </span>
          <span>Фото до/после</span>
        </li>
      </ul>
    </div>
    <div className="hero__visual" role="presentation" aria-hidden="true">
      <iframe
        src="https://s3.twcstorage.ru/e9dc5ea4-6dc9267d-85ca-4ae9-a41f-2895e9542a04/video_2025-11-15_18-06-54.mp4"
        title="Видео процесса кузовного ремонта"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  </section>
);

export default Hero;
