import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Dashboard from './components/dashboard/Dashboard'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
