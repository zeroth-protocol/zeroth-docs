export function OriginMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Zeroth Origin mark" role="img">
      <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="3" />
      <rect x="48.5" y="7" width="3" height="86" fill="currentColor" />
      <rect x="35" y="7" width="30" height="18" fill="var(--surface-origin)" />
      <rect x="35" y="75" width="30" height="18" fill="var(--surface-origin)" />
    </svg>
  );
}
