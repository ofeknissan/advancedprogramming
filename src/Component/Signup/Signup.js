import React from "react";
import "./Signup.css"

function signup() {
  return (
    <div className="App">
      <div className="container-fluid bd center halfWidth">
        <div row className="row">
          <h1>SignUp</h1>
        </div>
      <div className="row">
        <form>
          <div className="m-2">
            <label for="inputUsername" className="form-label">
              Username
            </label>
            <input type="text" className="form-control" id="inputUsername" />
          </div>
          <div className="m-3">
            <label for="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
          <button type="submit" className="btn btn-primary m-3">
            Submit
          </button>
          <div className="ps-5">
            Not registered? <a href="">Click here</a> to register
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default signup;
