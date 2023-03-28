import React from "react";

function RegisterForm(props) {
  const handleInput = props.handleInput;
  const handleSignUp = props.handleSignUp;

  return (
    <div>
      <h2>Sign Up</h2>

      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={handleInput} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" onChange={handleInput} />
        </div>
        <input value="Submit" type="submit" onClick={handleSignUp} />
      </form>
    </div>
  );
}

export default RegisterForm;
