import ActionButtons from './ActionButtons';
import car from '../assets/car.svg';
import sprayGun from '../assets/spray-gun.svg';
import powerUnit from '../assets/power-unit.svg';

const Hero = () => (
  <section className="hero" id="hero">
    <div className="hero__content">
      <p className="eyebrow">Автосервис полного цикла</p>
      <h1 className="hero__title">МАСТЕРСКАЯ МЯТЫЙ ЭЛЕМЕНТ</h1>
      <p className="hero__subtitle">
        От царапки до тотала — восстановим кузов, вернём блеск и уверенность на дороге.
      </p>
      <ActionButtons />
      <span id="booking" className="visually-hidden" aria-hidden="true" />
      <dl className="hero__metrics">
        <div className="metric">
          <dt>15 лет</dt>
          <dd>опыта мастеров</dd>
        </div>
        <div className="metric">
          <dt>2 300+</dt>
          <dd>восстановленных авто</dd>
        </div>
        <div className="metric">
          <dt>24/7</dt>
          <dd>поддержка клиентов</dd>
        </div>
      </dl>
    </div>
    <div className="hero__visual" role="presentation" aria-hidden="true">
      <div className="hero__halo" />
      <img className="hero__spray" src={sprayGun} alt="" />
      <img className="hero__car" src={car} alt="" />
      <img className="hero__power" src={powerUnit} alt="" />
    </div>
  </section>
);

export default Hero;
