import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './app'
import store from './redux/store'

import './index.css'

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement,
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
