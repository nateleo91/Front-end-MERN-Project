import Home from './Components/Home'
import Diary from './Components/Diary'
import Create from './Components/Create'
import AboutUs from './Components/AboutUs'
import Register from './Components/Register'
import Login from './Components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function App() {

  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false
  })

  function handleInput(e) {
    setUser({
      // spread operator needed to save input of previous state 
      ...user,
      [e.target.name]: e.target.value
    })
  }
  async function handleSignUp(e) {
    e.preventDefault()
    await axios.post("http://localhost:4000/users/signup", {
      //Change url on deployment
      email: user.email,
      password: user.password
    })
    .then( res => {
      localStorage.token = res.data.token
      setUser({ isLoggedIn: true })
    })
    .catch(error => console.log(error))
  }

  async function handleLogIn(e) {
    console.log(user.email, user.password)
    e.preventDefault()
    axios.post("http://localhost:4000/users/login",{
      //change url on deployment
      email: user.email,
      password: user.password
    })
    .then(res => {
      localStorage.token = res.data.token
      setUser({ isLoggedIn: true })
      console.log("logged in")
    })
    .catch(error => console.log(error))
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Register" element={<Register handleInput={handleInput} handleSignUp={handleSignUp}/>} />
        <Route path="/Login" element={<Login handleInput={handleInput} handleLogin={handleLogIn} />} />
      </Routes>
    </Router>
  );
}

export default App