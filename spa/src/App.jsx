import Layout from './components/Layout';
import News from './news/News';
import Schedule from './schedule/Schedule';
import Teams from './teams/Teams';
import Tickets from './tickets/Tickets';

const App = () => (
  <Layout>
    <News />
    <Schedule />
    <Teams />
    <Tickets />
  </Layout>
);

export default App;
