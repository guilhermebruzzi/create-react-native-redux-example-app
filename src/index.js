import React from 'react'
import { Provider } from 'react-redux'

import createStore from './redux'
import Counters from './containers/Counters'

const store = createStore()

const Main = () => (
  <Provider store={store}>
    <Counters />
  </Provider>
)

export default Main
