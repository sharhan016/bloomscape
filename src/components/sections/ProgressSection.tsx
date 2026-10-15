import { SectionMarker } from '../SectionMarker'

export function ProgressSection() {
  return (
    <section className="scene paper-scene progress" data-scene aria-label="Progress">
      <img className="chapter-art" data-drift=".35" src="/images/progress-scene.jpg" alt="" width="1536" height="1024" loading="lazy" />
      <div className="chapter-shade" />
      <SectionMarker number="04" />
      <p className="narrative" data-reveal>It’s not quite ready yet.</p>
    </section>
  )
}
