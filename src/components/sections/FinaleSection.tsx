import { ScrollIndicator } from '../ScrollIndicator'
import { SectionMarker } from '../SectionMarker'

export function FinaleSection() {
  return (
    <section className="scene finale" data-scene aria-label="Finale">
      <img className="finale__art" data-drift=".45" src="/images/moonlit-valley.jpg" alt="" width="1536" height="1024" loading="lazy" />
      <div className="finale__veil" />
      <SectionMarker number="05" light />
      <p className="finale__message" data-reveal aria-label="Just you wait ❤️ Sharhan">
        <span aria-hidden="true">Just you wait</span>
        <svg className="finale__heart" aria-hidden="true" viewBox="0 0 64 58"><path d="M32 53C25 44 6 34 6 18 6 7 20 3 27 12l5 7 5-7c7-9 21-5 21 6 0 16-19 26-26 35Z" /></svg>
        <span aria-hidden="true">Sharhan</span>
      </p>
      <ScrollIndicator />
    </section>
  )
}
