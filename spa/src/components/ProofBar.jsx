const proofIcons = {
  check: (
    <svg
      className="h-4 w-4 text-emerald-300"
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
      className="h-4 w-4 text-sky-300"
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

const ProofBar = ({ proofs }) => (
  <div
    className="flex flex-wrap items-center gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white"
    role="status"
    aria-live="polite"
  >
    {proofs.map((proof) => (
      <span
        key={proof.label}
        className="flex items-center gap-2"
        data-track-zone="hero"
        data-track-element="proof"
        data-track-label={proof.label}
      >
        {proofIcons[proof.icon] ?? proofIcons.check}
        <span>{proof.label}</span>
      </span>
    ))}
  </div>
);

export default ProofBar;
