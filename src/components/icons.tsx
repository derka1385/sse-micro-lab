// One drawn icon family: 16-unit grid, 1.6 stroke, round caps. Replaces unicode stand-ins (✓ ✗ → ✕ ⌫).
type P = { size?: number; label?: string; className?: string };

function Icon({ d, size = 16, label, className = '' }: P & { d: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon ${className}`}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <path d={d} />
    </svg>
  );
}

export const ArrowRight = (p: P) => <Icon d="M2.5 8h11M9 3.5 13.5 8 9 12.5" {...p} />;
export const ArrowLeft = (p: P) => <Icon d="M13.5 8h-11M7 3.5 2.5 8 7 12.5" {...p} />;
export const ArrowDown = (p: P) => <Icon d="M8 2.5v11M3.5 9 8 13.5 12.5 9" {...p} />;
export const Check = (p: P) => <Icon d="M2.5 8.6 6.2 12 13.5 4" {...p} />;
export const Cross = (p: P) => <Icon d="M3.5 3.5l9 9M12.5 3.5l-9 9" {...p} />;
export const Ring = (p: P) => <Icon d="M8 3a5 5 0 1 0 0 10A5 5 0 1 0 8 3Z" {...p} />;
export const Caution = (p: P) => <Icon d="M8 2.5 14 13.5H2L8 2.5ZM8 7v2.8M8 11.6v.1" {...p} />;
export const Erase = (p: P) => <Icon d="M6 3.5h7.5v9H6L1.5 8 6 3.5ZM8.2 6.2l3.4 3.6M11.6 6.2l-3.4 3.6" {...p} />;
