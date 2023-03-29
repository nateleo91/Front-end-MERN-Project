import React from "react";
import Title from "../Modules/Title";
import Footer from '../Modules/Footer';
import RegisterForm from "../Modules/Login&register/RegisterForm";

function Register(props) {
  const handleInput = props.handleInput;
  const handleSignUp = props.handleSignUp;

  return (
    <div>
      <Title />
      <RegisterForm handleInput={handleInput} handleSignUp={handleSignUp} />
      <Footer />
    </div>
  );
}

export default Register;
