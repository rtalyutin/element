const Section = ({ id, title, description, children }) => (
  <section id={id} className="section">
    <div className="section__header">
      <h2 className="section__title">{title}</h2>
      {description ? <p className="section__description">{description}</p> : null}
    </div>
    {children}
  </section>
);

export default Section;
