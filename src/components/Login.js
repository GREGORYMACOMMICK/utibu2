import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("JohnDoe"); // Default username
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for login status

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example login logic - validate credentials here
    if (username === "JohnDoe" && password === "password") {
      setIsLoggedIn(true); // Simulate login success
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {!isLoggedIn ? (
                <form onSubmit={handleSubmit}>
                  <h1 className="text-center mb-4">Login</h1>
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
                    Login
                  </button>
                </form>
              ) : (
                <div>
                  <h2 className="text-center mb-4">Welcome, {username}!</h2>
                  <p className="text-center">You are logged in.</p>
                  <div className="text-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      Logout
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

export default Login;
