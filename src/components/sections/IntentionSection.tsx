import { SectionMarker } from '../SectionMarker'

export function IntentionSection() {
  return (
    <section className="scene paper-scene intention" data-scene aria-label="Intention">
      <img className="chapter-art" data-drift=".35" src="/images/intention-scene.jpg" alt="" width="1536" height="1024" loading="lazy" />
      <div className="chapter-shade" />
      <SectionMarker number="03" />
      <p className="narrative" data-reveal>I want to get this just right.</p>
    </section>
  )
}
