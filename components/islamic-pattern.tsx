export function IslamicPattern() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="islamicPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          {/* Eight-pointed star pattern */}
          <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor" opacity="0.5" />
          <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.3" />
          {/* Corner decorations */}
          <path d="M0 0 L4 0 L0 4 Z" fill="currentColor" opacity="0.2" />
          <path d="M20 0 L16 0 L20 4 Z" fill="currentColor" opacity="0.2" />
          <path d="M0 20 L4 20 L0 16 Z" fill="currentColor" opacity="0.2" />
          <path d="M20 20 L16 20 L20 16 Z" fill="currentColor" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamicPattern)" />
    </svg>
  )
}
