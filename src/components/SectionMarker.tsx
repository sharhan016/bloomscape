export function SectionMarker({ number, light = false }: { number: string; light?: boolean }) {
  return (
    <div className={`section-marker ${light ? 'section-marker--light' : ''}`} aria-hidden="true">
      <span>{number}</span><i />
      <b /><b /><b /><b />
    </div>
  )
}
