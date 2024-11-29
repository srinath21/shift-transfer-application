import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router } from 'react-router'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Route path='/' element={<div>login</div>} />
        <Route path='/dashboard' Component={Dashboard} />
      </Router>
    </>
  )
}

export default App
