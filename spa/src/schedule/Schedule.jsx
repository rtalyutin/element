import Section from '../components/Section';
import Card from '../components/Card';
import { formatScheduleTime } from '../utils/date';
import config from './config.json';

const Schedule = () => (
  <Section id="schedule" title={config.title} description={config.description}>
    <div className="cards">
      {config.matches.map((match) => (
        <Card
          key={`${match.home}-${match.away}-${match.startsAt}`}
          title={`${match.home} vs ${match.away}`}
          meta={formatScheduleTime(match.startsAt)}
        />
      ))}
    </div>
  </Section>
);

export default Schedule;
