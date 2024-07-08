import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false); // Example state for signup status

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example signup logic - here you would typically send the form data to a server
    console.log("Form submitted:", { username, email, password });
    setIsSignedUp(true); // Simulate signup success
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {!isSignedUp ? (
                <form onSubmit={handleSubmit}>
                  <h1 className="text-center mb-4">Signup</h1>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign Up
                  </button>
                </form>
              ) : (
                <div>
                  <h2 className="text-center mb-4">
                    Account Created Successfully!
                  </h2>
                  <p className="text-center">Your username is: {username}</p>
                  <p className="text-center">Your email is: {email}</p>
                  <div className="text-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => setIsSignedUp(false)}
                    >
                      Sign Up Another Account
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
