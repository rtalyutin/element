import Header from './Header';
import Footer from './Footer';
import '../styles/layout.css';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <main className="layout__content">{children}</main>
    <Footer />
  </div>
);

export default Layout;
