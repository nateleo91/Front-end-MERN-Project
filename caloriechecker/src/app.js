import Home from './Components/Home'
import Diary from './Components/Diary'
import Create from './Components/Create'
import AboutUs from './Components/AboutUs'
import Register from './Components/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false
  })

  function handleInput(e) {
    setUser[e.target.name] = e.target.value
  }
  function handleSignUp(e) {

  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Register" element={<Register handleInput={handleInput} handleSignUp={handleSignUp}/>} />
      </Routes>
    </Router>
  );
}

export default App