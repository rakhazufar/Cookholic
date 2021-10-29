import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./reducers";

function Signup() {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  const { userAction } = bindActionCreators(actionCreators, dispatch);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(form);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitSignup = (e) => {
    e.preventDefault();
    console.log(form);

    //Sign Up Firebase
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        userAction(form);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

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
        <form onSubmit={submitSignup}>
          <div>
            <label htmlFor="name">Fullname</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={form.confirmPassword}
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>
          <div className="term">
            <input type="checkbox" id="term" />
            <label htmlFor="term">
              I have read and agree with <a href="#">term & conditions</a>
            </label>
          </div>
          <button type="submit" className="btn">
            Create Account
          </button>
        </form>
        <p className="already-signup">
          Already have an account?
          <a href="/signin">Sign In here</a>
        </p>
      </div>
    </section>
  );
}

export default Signup;
