const Card = ({ title, meta, description, action }) => (
  <article className="card">
    {meta ? <span className="card__meta">{meta}</span> : null}
    <h3 className="card__title">{title}</h3>
    {description ? <p className="card__description">{description}</p> : null}
    {action ? (
      <button type="button" className="card__cta" onClick={action.onClick}>
        {action.label}
      </button>
    ) : null}
  </article>
);

export default Card;
