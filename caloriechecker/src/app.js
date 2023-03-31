import Home from './Components/Home'
import Diary from './Components/Diary'
import Create from './Components/Create'
import AboutUs from './Components/AboutUs'
import Register from './Components/Register'
import Login from './Components/Login'
import Header from './Modules/Header'
import Footer from './Modules/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'
import axios from 'axios'

function App() {

  const [user, setUser] = useState({
    email: '',
    password: '',
    retypePassword: '',
    isLoggedIn: false
  })

  function handleInput(e) {
    setUser({
      // spread operator needed to save input of previous state 
      ...user,
      [e.target.name]: e.target.value
    })
    console.log(user.email, user.password)
  }
  async function handleSignUp(e) {
    console.log(user.email, user.password, user.retypePassword)
    e.preventDefault()
    if(user.password === user.retypePassword){
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
    } else {
      console.log("password don't match")
      //make passwords dont match a popup alerting of mismatched password
    }
  }

  async function handleLogIn(e) {

    e.preventDefault()
    await axios.post("http://localhost:4000/users/login",{
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

    <div>  
      <Router>
      <Header handleInput={handleInput} handleLogIn={handleLogIn} handleSignUp={handleSignUp}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
