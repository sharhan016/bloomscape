import { SectionMarker } from '../SectionMarker'

export function TeaserSection() {
  return (
    <section className="scene paper-scene teaser" data-scene aria-label="Teaser">
      <img className="chapter-art" data-drift=".35" src="/images/teaser-scene.jpg" alt="" width="1536" height="1024" loading="lazy" />
      <div className="chapter-shade" />
      <SectionMarker number="02" />
      <p className="narrative" data-reveal>I’ve been working on something.</p>
    </section>
  )
}
