const CTAGroup = ({ actions }) => (
  <div
    className="flex flex-wrap items-center gap-4"
    role="group"
    aria-label="Основные действия"
  >
    {actions.map((action) => (
      <button
        key={action.analyticsId}
        type="button"
        className={
          action.variant === 'secondary'
            ? 'rounded-full border border-orange-300/70 px-6 py-3 text-base font-semibold text-orange-100 transition hover:border-orange-200 hover:text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-200'
            : 'rounded-full bg-orange-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-[0_10px_30px_-12px_rgba(249,115,22,0.65)] transition hover:bg-orange-300 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-200'
        }
        aria-label={`${action.label} — кузовной ремонт`}
        data-track-zone="hero"
        data-track-element="cta"
        data-track-label={action.label}
        onClick={() => {
          if (action.href.startsWith('tel:')) {
            window.location.href = action.href;
          } else {
            window.location.assign(action.href);
          }
        }}
      >
        {action.label}
      </button>
    ))}
  </div>
);

export default CTAGroup;
