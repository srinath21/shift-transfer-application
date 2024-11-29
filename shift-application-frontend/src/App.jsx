import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from './components/dashboard/Dashboard'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Shift from './components/Shift'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/shift' element={<Shift/>}/>
      </Routes>
    </>
  )
}

export default App
