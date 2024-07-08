import React, { useState } from "react";

const Settings = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@example.com");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSave = () => {
    // Logic to save updated settings goes here
    console.log("Settings saved:", { username, email });
    alert("Settings have been saved successfully!");
  };

  return (
    <div className="container mt-5">
      <h1>Settings</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={handleUsernameChange}
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
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSave}>
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
