import { SectionMarker } from '../SectionMarker'

export function OpeningSection() {
  return (
    <section className="scene opening" data-scene aria-label="Opening">
      <img className="opening__art" data-drift="1.1" src="/images/dawn-garden.jpg" alt="" width="1536" height="1024" fetchPriority="high" />
      <div className="opening__glow" />
      <SectionMarker number="01" />
      <h1 className="opening__title" data-reveal>Hey, <em>Nadeeda.</em></h1>
    </section>
  )
}
