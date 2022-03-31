import React, { useState } from "react";
import "./SignIn.css";
import Alert from "../Alert/Alert";
const SignIn = () => {
  const userData = new Map();
  userData.set("ofek", { password: "1234", display: "ofekniss" });
  userData.set("tamir", { password: "12345", display: "tamir12" });
  userData.set("matan", { password: "11", display: "123123" });
  userData.set("elad", { password: "12345", display: "blair" });
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const onSubmit = (event) => {
    event.preventDefault();
    if(name == '' || password == ''){
        setError("One of the inputs are empty!");
        return;
    }
    if (userData.get(name) && userData.get(name).password == password) {
      console.log("YES!");
    } else {
      setError("Wrong username or password!")
    }
  };
  return (
    <div className="fullPage">
      <video
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src="/videos/background-signup.mp4" type="video/mp4" />
      </video>
      <div className="signIn">
        <div className="container form-container">
          <div className="row mb-3">
            <h1 className="text-light">Sign In</h1>

          </div>
          <div className="row">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label for="inputUsername" className="form-label text-light fs-5">
                  Username
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="form-control"
                  id="inputUsername"
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <label for="inputPassword" className="form-label text-light fs-5">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
              <div className="button-input">
                <button
                  type="submit"
                  className="btn btn-md btn-input btn-dark border border-light border-3"
                >
                  Submit
                </button>
              </div>
              <div id="notRegisteredMsg" className="register text-light">
            Not registered? <a href="">Click here</a> to register
                </div>
              {error != "" && <Alert>{error}</Alert>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
