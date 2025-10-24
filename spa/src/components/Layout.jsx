import Header from './Header';
import Footer from './Footer';
import '../styles/layout.css';

const Layout = ({ children }) => (
  <div className="layout">
    <div className="layout__backdrop" aria-hidden="true" />
    <Header />
    <main className="layout__content">{children}</main>
    <Footer />
  </div>
);

export default Layout;
