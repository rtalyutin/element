const HeroImage = () => (
  <picture className="block overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
    <source
      type="image/avif"
      srcSet="/hero/desk.avif 1x, /hero/desk@2x.avif 2x"
      media="(min-width:768px)"
    />
    <source
      type="image/webp"
      srcSet="/hero/desk.webp 1x, /hero/desk@2x.webp 2x"
      media="(min-width:768px)"
    />
    <source
      type="image/jpeg"
      srcSet="/hero/desk.jpg 1x, /hero/desk@2x.jpg 2x"
      media="(min-width:768px)"
    />
    <source type="image/avif" srcSet="/hero/mob.avif 1x, /hero/mob@2x.avif 2x" />
    <source type="image/webp" srcSet="/hero/mob.webp 1x, /hero/mob@2x.webp 2x" />
    <source type="image/jpeg" srcSet="/hero/mob.jpg 1x, /hero/mob@2x.jpg 2x" />
    <img
      src="/hero/desk.jpg"
      srcSet="/hero/desk.jpg 1280w, /hero/desk@2x.jpg 2560w"
      width="1280"
      height="720"
      fetchPriority="high"
      alt="Кузовной ремонт: авто на подъемнике"
      className="h-full w-full object-cover"
    />
  </picture>
);

export default HeroImage;
