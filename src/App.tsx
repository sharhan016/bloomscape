/*
 * Previous five-section narrative experience.
 * Kept here so it can be restored later without reconstructing the page.
 * Its components, animation hook, and visual assets are not imported or loaded
 * by the active minimal page below.
 *
 * import { useRef } from 'react'
 * import { OpeningSection } from './components/sections/OpeningSection'
 * import { TeaserSection } from './components/sections/TeaserSection'
 * import { IntentionSection } from './components/sections/IntentionSection'
 * import { ProgressSection } from './components/sections/ProgressSection'
 * import { FinaleSection } from './components/sections/FinaleSection'
 * import { useScrollAnimations } from './hooks/useScrollAnimations'
 *
 * export function NarrativeExperience() {
 *   const mainRef = useRef<HTMLElement>(null)
 *   useScrollAnimations(mainRef)
 *
 *   return (
 *     <main ref={mainRef}>
 *       <OpeningSection />
 *       <TeaserSection />
 *       <IntentionSection />
 *       <ProgressSection />
 *       <FinaleSection />
 *     </main>
 *   )
 * }
 */

export default function App() {
  return (
    <main className="belonging-page">
      <section className="belonging" aria-labelledby="nadeeda-name">
        <p className="belonging__intro">this space belongs to</p>
        <h1 className="belonging__name" id="nadeeda-name">Nadeeda Nazar</h1>
        <div className="belonging__divider" aria-hidden="true">
          <span />
          <svg viewBox="0 0 40 36" focusable="false">
            <path d="M20 32C15.8 26.7 5 20.8 5 11.5 5 5 13.2 2.6 17.2 7.8L20 12l2.8-4.2C26.8 2.6 35 5 35 11.5 35 20.8 24.2 26.7 20 32Z" />
          </svg>
          <span />
        </div>
      </section>
    </main>
  )
}
