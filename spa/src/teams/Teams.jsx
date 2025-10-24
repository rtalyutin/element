import Section from '../components/Section';
import Card from '../components/Card';
import config from './config.json';

const Teams = () => (
  <Section id="teams" title={config.title} description={config.description}>
    <div className="cards cards--columns">
      {config.lineup.map((team) => (
        <Card
          key={team.name}
          title={team.name}
          meta={`Тренер: ${team.coach}`}
          description={team.identity}
        />
      ))}
    </div>
  </Section>
);

export default Teams;
