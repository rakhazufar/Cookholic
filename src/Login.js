import React from "react";

function Login() {
  return (
    <section className="login">
      <div className="card-login">
        <h1>Log In</h1>
        <form>
          <label htmlFor="email">Email Address </label>
          <input type="email" id="email" name="email" placeholder="Email" />
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <button className="btn">Sign In</button>
        </form>
        <div>
          <h5>
            Not Registered? <a href="">Sign Up</a>
          </h5>
          <h5>
            <a href="">Forgot Your Password?</a>
          </h5>
        </div>
      </div>
    </section>
  );
}

export default Login;
