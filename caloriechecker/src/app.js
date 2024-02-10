import Home from './Components/Home'
import Diary from './Components/Diary'
import Create from './Components/Create'
import AboutUs from './Components/AboutUs'
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
    user_firstname: '',
    user_lastname: '',
    isLoggedIn: false
  })

  function handleInput(e) {
    setUser({
      // spread operator needed to save input of previous state 
      ...user,
      [e.target.name]: e.target.value
    })
  }
  async function handleSignUp() {
    if(user.password === user.retypePassword){
      await axios.post("https://calorie-trakr.herokuapp.com/users/signup", {
        //Change url on deployment Original is localhost 4000
        email: user.email,
        password: user.password,
        user_firstname: user.user_firstname,
        user_lastname: user.user_lastname      
      })
      .then( res => {
        localStorage.token = res.data.token
        setUser({ isLoggedIn: true })
        console.log("signed up!")
      })
      .catch(error => console.log(error))
    } else {
      console.log("password don't match")
      //make passwords dont match a popup alerting of mismatched password
    }
  }

  async function handleLogIn() {

    await axios.post("https://calorie-trakr.herokuapp.com/users/login",{
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
      </Router>
    </div>
  );
}

export default App;
