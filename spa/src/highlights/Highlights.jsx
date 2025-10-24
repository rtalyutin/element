import Section from '../components/Section';
import highlights from './config.json';

const Highlights = () => (
  <Section id="services" title={highlights.title} description={highlights.description}>
    <div className="highlights" role="list">
      {highlights.items.map(({ title, description, icon }) => (
        <article key={title} className="highlight" role="listitem">
          <span className="highlight__icon" aria-hidden="true">
            {icon}
          </span>
          <h3 className="highlight__title">{title}</h3>
          <p className="highlight__description">{description}</p>
        </article>
      ))}
    </div>
  </Section>
);

export default Highlights;
