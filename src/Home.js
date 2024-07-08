import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpeg";
import "./Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`You searched for: ${searchQuery}`);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container-fluid">
      {/* Header */}
      <header className="header">
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <div className={`hamburger ${sidebarOpen ? "open" : ""}`}></div>
          <div className={`hamburger ${sidebarOpen ? "open" : ""}`}></div>
          <div className={`hamburger ${sidebarOpen ? "open" : ""}`}></div>
        </div>
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid logo mr-2"
            style={{ maxHeight: "50px" }}
          />
          <h5 className="mb-0">Utibu Hospital</h5>
        </div>
        <form className="input-group" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="btn btn-primary" type="submit">
            <i className="bi bi-search"></i> Search
          </button>
        </form>
      </header>

      {/* Main Content */}
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h1>Welcome to Our Utibu Health Website</h1>
            <p className="lead">
              Dedicated to providing high-quality healthcare services.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6">
            <h2>Our Services</h2>
            <ul>
              <li>Primary Care</li>
              <li>Specialty Care</li>
              <li>Emergency Care</li>
              <li>...and more</li>
            </ul>
          </div>
          <div className="col-6">
            <h2>Latest News</h2>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">New Treatment Option Available</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vel lorem vitae lectus tempor viverra.
                </p>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Community Health Fair</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vel lorem vitae lectus tempor viverra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/updates">Updates</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Home;
