import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Circle from './App'
import QrCode from './QrCode'

ReactDOM.render(
  <React.StrictMode>
    <Circle />
    <QrCode />
  </React.StrictMode>,
  document.getElementById('root')
)
