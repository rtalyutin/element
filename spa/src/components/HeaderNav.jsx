const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#prices', label: 'Цены' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#contacts', label: 'Контакты' },
];

const HeaderNav = () => (
  <header className="bg-brand-neutral/95 text-white backdrop-blur supports-[backdrop-filter]:bg-brand-neutral/80">
    <div className="container flex items-center justify-between gap-6 py-4">
      <a
        href="#hero"
        className="flex items-center gap-3 text-left"
        aria-label="На главную: Мастерская Мятый элемент"
        data-track-zone="header"
        data-track-element="brand"
      >
        <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-orange-300">
          Мастерская
        </span>
        <span className="font-display text-xl font-semibold">Мятый элемент</span>
      </a>
      <nav
        aria-label="Основная навигация"
        className="hidden items-center gap-6 text-sm font-medium md:flex"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-orange-200"
            data-track-zone="header"
            data-track-element="nav-link"
            data-track-label={link.label}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button
        type="button"
        className="rounded-full bg-orange-400 px-5 py-2 text-sm font-semibold text-slate-950 transition-colors
        hover:bg-orange-300 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-200"
        data-track-zone="header"
        data-track-element="cta"
        data-track-label="Заказать"
        aria-label="Заказать кузовной ремонт"
        onClick={() => {
          window.location.hash = '#contacts';
        }}
      >
        Заказать
      </button>
    </div>
  </header>
);

export default HeaderNav;
