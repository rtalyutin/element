import phoneIcon from '../assets/phone.svg';

const ActionButtons = () => (
  <div className="action-buttons" role="group" aria-label="Действия геро-блока">
    <a
      className="button button--ghost"
      href="tel:+74951234567"
      aria-label="Позвонить в Мастерскую"
    >
      <span className="button__icon" aria-hidden="true">
        <img src={phoneIcon} alt="" />
      </span>
      <span>Позвонить</span>
    </a>
  </div>
);

export default ActionButtons;
