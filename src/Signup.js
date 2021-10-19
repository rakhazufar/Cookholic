import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Signup() {
  const number = useSelector((store) => store.number);
  const dispatch = useDispatch();
  return (
    <section className="signup-section">
      <div className="signup-text">
        <h1>Glad to see you!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          aliquam illo assumenda eveniet.
        </p>
      </div>
      <div className="signup-form">
        <h1>Hello, Friend!</h1>
        <form>
          <div>
            <label htmlFor="name">Fullname</label>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="term">
            <input type="checkbox" id="term" />
            <label htmlFor="term">
              I have read and agree with <a href="#">term & conditions</a>
            </label>
          </div>
          <button className="btn">Create Account</button>
        </form>
        <p className="already-signup">
          Already have an account? <a href="">Sign In here</a>
        </p>
      </div>
    </section>
  );
}

export default Signup;
