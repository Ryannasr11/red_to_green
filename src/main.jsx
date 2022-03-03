import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Circle, QrCode } from './App'

ReactDOM.render(
  <React.StrictMode>
    <Circle />
    <QrCode />
  </React.StrictMode>,
  document.getElementById('root')
)
