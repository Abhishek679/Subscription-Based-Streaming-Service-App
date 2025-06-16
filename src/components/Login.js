import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "./../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BACKGROUND_IMG } from "../utils/constant";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const craeteUser = async (user) => {
    const response = await fetch("http://localhost:8000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const jsonRes = await response.json();
    return jsonRes;
  };

  const auth = async (user) => {
    const response = await fetch("http://localhost:8000/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const jsonRes = await response.json();
    return jsonRes;
  };

  const signInLogInBtn = async() => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      const response = await craeteUser({
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      });
      if (response) setIsSignInForm(true)
    } else {  
      const response = await auth({
        email: email.current.value,
        password: password.current.value,
      });
      if (response) {
        dispatch(addUser(response));
        navigate("/browse");
      }
    }
  };

  const taggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="w-screen h-screen absolute"
          src={BACKGROUND_IMG}
          alt=""
          aria-hidden="true"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault(e)}
        className="w-3/12 absolute p-12 mx-auto my-36 bg-black bg-opacity-75 right-0 left-0 text-white"
      >
        <h1 className="font-bold text-xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-600 bg-opacity-30"
        />
        {!isSignInForm && (
          <input
            ref={name}
            text="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-600 bg-opacity-30"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-600 bg-opacity-30"
        />
        <p className="text-red-500 py-2">{errorMessage}</p>
        <button
          className="p-2 m-2 w-full bg-red-500 rounded-md"
          onClick={signInLogInBtn}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={taggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
