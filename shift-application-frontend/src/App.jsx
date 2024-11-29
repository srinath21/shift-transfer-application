import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<div>login</div>} />
        <Route path='/dashboard' Component={Dashboard} />
      </Routes>
    </>
  )
}

export default App
