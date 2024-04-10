import { Button } from '@/common/components/ui/button'
import { Slider } from '@/common/components/ui/slider'
import { TabSwitcher } from '@/common/components/ui/tabSwitcher'
import { TextField } from '@/common/components/ui/textField'

import s from '@/feature/decks/ui/decksPanel/decksPanel.module.scss'

export const DecksPanel = () => {
  return (
    <div className={s.root}>
      <TextField placeholder={'Input search'} type={'search'} />
      <TabSwitcher
        buttons={[
          { buttonsName: 'My Cards', disabled: false, value: 'My Cards' },
          { buttonsName: 'All Cards', disabled: false, value: 'All Cards' },
        ]}
        classNameTrigger={s.forTabSwitcher}
        label={'Show decks cards'}
      />
      <Slider label={'Number of cards'} value={[0, 10]} />
      <Button name={'Clear Filter'} variant={'secondary'}>
        Clear Filter
      </Button>
    </div>
  )
}
