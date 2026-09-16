export function GoldStar({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M32 6 C33 24 35 31 54 32 C35 33 33 40 32 58 C31 40 29 33 10 32 C29 31 31 24 32 6 Z"
        fill="currentColor"
      />
    </svg>
  )
}
