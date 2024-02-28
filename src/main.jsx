import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import responsiveTheme from './theme/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={responsiveTheme}>
    <App />
    </ThemeProvider>
      
  </React.StrictMode>,
)
