import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css'
import 'boxicons'
import 'animate.css'

import {store} from './store/store'
import { AppRouter } from './components/routers/AppRouter';
import './styles/styles.scss'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)
