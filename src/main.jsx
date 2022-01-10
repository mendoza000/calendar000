import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import 'boxicons'
import 'animate.css'

import './styles/styles.scss'
import { AppRouter } from './components/routers/AppRouter';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
)
