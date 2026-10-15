import { useRef } from 'react'
import { OpeningSection } from './components/sections/OpeningSection'
import { TeaserSection } from './components/sections/TeaserSection'
import { IntentionSection } from './components/sections/IntentionSection'
import { ProgressSection } from './components/sections/ProgressSection'
import { FinaleSection } from './components/sections/FinaleSection'
import { useScrollAnimations } from './hooks/useScrollAnimations'

export default function App() {
  const mainRef = useRef<HTMLElement>(null)
  useScrollAnimations(mainRef)

  return (
    <main ref={mainRef}>
      <OpeningSection />
      <TeaserSection />
      <IntentionSection />
      <ProgressSection />
      <FinaleSection />
    </main>
  )
}
