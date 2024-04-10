import { useState } from 'react'

import { Button } from '@/common/components/ui/button'

import s from '@/feature/decks/ui/decksHeader/addDeckModal/addDeckModal.module.scss'

type Props = {
  isDisabled?: boolean
}

export const AddDeck = ({ isDisabled }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  // const [createDeck, { error, isLoading }] = useCreateDeckMutation()

  const openModal = () => setIsOpen(true)

  return (
    <>
      <Button className={s.button} disabled={isDisabled} onClick={openModal}>
        Add New Deck
      </Button>
    </>
  )
}
