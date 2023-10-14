import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const documentation = ReactDOM.createRoot(document.getElementById('root'))

const content = <React.StrictMode>
  <App />
</React.StrictMode>

documentation.render(content)