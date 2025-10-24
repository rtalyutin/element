import Section from '../components/Section';
import Card from '../components/Card';
import config from './config.json';

const News = () => (
  <Section id="news" title={config.title} description={config.description}>
    <div className="cards">
      {config.articles.map((article) => (
        <Card
          key={article.title}
          title={article.title}
          description={article.summary}
          meta={article.tag}
        />
      ))}
    </div>
  </Section>
);

export default News;
