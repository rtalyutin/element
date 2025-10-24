import Layout from './components/Layout';
import Hero from './hero/Hero';
import Highlights from './highlights/Highlights';
import Contacts from './contacts/Contacts';

const App = () => (
  <Layout>
    <Hero />
    <Highlights />
    <div id="pricing" className="anchor-placeholder" aria-hidden="true" />
    <div id="gallery" className="anchor-placeholder" aria-hidden="true" />
    <Contacts />
  </Layout>
);

export default App;
