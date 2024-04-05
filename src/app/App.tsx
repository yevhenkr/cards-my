import { Provider } from 'react-redux'

import { store } from '@/app/store'
import { Router } from '@/common/routes/Router'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
export default App
