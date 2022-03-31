import React from 'react'

function signup() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
              <h1>SignUp</h1>
            </div>
          </div>
          <div className="row">
              <form>
                <div className="mb-3">
                  <label for="inputUsername" class="form-label">Username</label>
                  <input type="text" className="form-control" id="inputUsername"/>
                </div>
                <div className="mb-3">
                  <label for="inputPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
        </div>
      </div>
    );
  }
  
  export default signup;
  