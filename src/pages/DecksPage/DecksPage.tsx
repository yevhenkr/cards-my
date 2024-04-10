import { DecksHeader } from '@/feature/decks/ui/decksHeader/DecksHeader'
import { DecksPanel } from '@/feature/decks/ui/decksPanel/DeksPanel'

import s from '@/pages/DecksPage/decksPage.module.scss'

export const DecksPage = () => {
  return (
    <div className={s.root}>
      <DecksHeader />
      <DecksPanel />
    </div>
  )
}
