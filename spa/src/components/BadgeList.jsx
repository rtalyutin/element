const iconMap = {
  frame: (
    <svg
      className="h-5 w-5 text-orange-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h6v6H9z" />
    </svg>
  ),
  shield: (
    <svg
      className="h-5 w-5 text-orange-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  check: (
    <svg
      className="h-5 w-5 text-orange-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  camera: (
    <svg
      className="h-5 w-5 text-orange-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 7h4l2-2h4l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  ),
};

const BadgeList = ({ items }) => (
  <ul className="flex flex-wrap gap-3" aria-label="Преимущества">
    {items.map((item) => (
      <li
        key={item.label}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 backdrop-blur"
        data-track-zone="hero"
        data-track-element="badge"
        data-track-label={item.label}
      >
        {iconMap[item.icon] ?? iconMap.check}
        <span>{item.label}</span>
      </li>
    ))}
  </ul>
);

export default BadgeList;
