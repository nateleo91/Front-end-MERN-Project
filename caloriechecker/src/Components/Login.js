import React from "react";
import Header from '../Modules/Header'
import Footer from '../Modules/Footer';
import LoginForm from "../Modules/Login&register/LoginForm";

function Login(props) {
  const handleInput = props.handleInput;
  const handleLogIn = props.handleLogIn;

  return (
    <div>
      <Header />
      <LoginForm handleInput={handleInput} handleLogIn={handleLogIn} />
      <Footer />
    </div>
  );
}

export default Login;
