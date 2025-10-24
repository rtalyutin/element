const HeroTitle = ({ heading, subheading, tagline }) => (
  <div className="space-y-6 text-balance text-white">
    <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
      {heading}
    </h1>
    <h2 className="text-2xl font-semibold text-orange-200 sm:text-3xl md:text-4xl">
      {subheading}
    </h2>
    <p className="max-w-xl text-lg text-slate-200 md:text-xl">{tagline}</p>
  </div>
);

export default HeroTitle;
