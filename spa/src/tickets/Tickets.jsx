import Section from '../components/Section';
import Card from '../components/Card';
import { formatTicketPrice } from '../utils/date';
import config from './config.json';

const Tickets = () => (
  <Section id="tickets" title={config.title} description={config.description}>
    <div className="cards cards--columns">
      {config.options.map((option) => (
        <Card
          key={option.name}
          title={option.name}
          description={`${option.perks} Стоимость: ${formatTicketPrice(option.price)} ₽.`}
          action={{ label: 'Забронировать', onClick: () => undefined }}
        />
      ))}
    </div>
  </Section>
);

export default Tickets;
