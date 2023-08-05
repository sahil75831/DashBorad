import React from 'react'
import ThemeContextProvider from './DashBoardFront/Theme'
import App from './App'

const Ap = () => {
  return (
    <div>
      <ThemeContextProvider>
        <App/>
      </ThemeContextProvider>
    </div>
  )
}

export default Ap
