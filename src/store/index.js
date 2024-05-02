import { createStore } from 'vuex'

import orders from './orders'

const store = {
  modules: {
    orders
  },
  strict: process.env.NODE_ENV !== 'production'
}

export default createStore(store);

