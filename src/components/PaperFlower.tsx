type PaperFlowerProps = {
  className?: string
  size?: number
}

export function PaperFlower({ className = '', size = 90 }: PaperFlowerProps) {
  return (
    <svg className={`paper-flower ${className}`} width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <radialGradient id="petal" cx="50%" cy="50%" r="55%">
          <stop offset="0" stopColor="#ffd4c9" />
          <stop offset=".65" stopColor="#ef8f91" />
          <stop offset="1" stopColor="#c75462" />
        </radialGradient>
        <filter id="flowerShadow"><feDropShadow dx="0" dy="3" stdDeviation="2.5" floodOpacity=".22" /></filter>
      </defs>
      <g filter="url(#flowerShadow)">
        {[0, 72, 144, 216, 288].map((rotation) => (
          <ellipse key={rotation} cx="50" cy="28" rx="15" ry="27" fill="url(#petal)" transform={`rotate(${rotation} 50 50)`} />
        ))}
        <circle cx="50" cy="50" r="9" fill="#f1b15f" />
        <circle cx="50" cy="50" r="4" fill="#8c3845" />
      </g>
    </svg>
  )
}
