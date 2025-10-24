import { useEffect } from 'react';
import HeaderNav from '../components/HeaderNav';
import HeroTitle from '../components/HeroTitle';
import CTAGroup from '../components/CTAGroup';
import BadgeList from '../components/BadgeList';
import ProofBar from '../components/ProofBar';
import HeroImage from '../components/HeroImage';
import heroConfig from '../blocks/hero/config.json';

const Home = () => {
  useEffect(() => {
    let scriptEl;

    const injectSchema = async () => {
      try {
        const response = await fetch('/seo/auto-repair.json');
        if (!response.ok) return;
        const schema = await response.text();
        scriptEl = document.createElement('script');
        scriptEl.type = 'application/ld+json';
        scriptEl.setAttribute('data-origin', 'home-schema');
        scriptEl.text = schema;
        document.head.appendChild(scriptEl);
      } catch (error) {
        if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
          // eslint-disable-next-line no-console
          console.warn('Не удалось загрузить schema.org JSON-LD', error);
        }
      }
    };

    injectSchema();

    return () => {
      if (scriptEl && document.head.contains(scriptEl)) {
        document.head.removeChild(scriptEl);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-neutral via-slate-950 to-slate-950">
      <HeaderNav />
      <main id="hero" className="container pb-16 pt-20 md:pt-24">
        <section className="grid gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center">
          <div className="space-y-10" data-track-zone="hero" data-track-section="intro">
            <HeroTitle
              heading={heroConfig.heading}
              subheading={heroConfig.subheading}
              tagline={heroConfig.tagline}
            />
            <ProofBar proofs={heroConfig.proofs} />
            <CTAGroup actions={heroConfig.ctas} />
            <BadgeList items={heroConfig.badges} />
          </div>
          <div
            className="mx-auto w-full max-w-xl md:max-w-none"
            data-track-zone="hero"
            data-track-section="visual"
          >
            <HeroImage />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
