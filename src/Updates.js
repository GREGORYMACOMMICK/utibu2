import React from "react";

const Updates = () => {
  return (
    <div>
      <h1>Updates</h1>
      <p>
        Stay informed with the latest news and updates from Utibu Hospital. Here
        are our recent announcements:
      </p>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">New Treatment Option Available</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel lorem vitae lectus tempor viverra.
          </p>
          <p className="card-text">
            <small className="text-muted">Published on July 8, 2024</small>
          </p>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Community Health Fair</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel lorem vitae lectus tempor viverra.
          </p>
          <p className="card-text">
            <small className="text-muted">Published on June 15, 2024</small>
          </p>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Upcoming Events</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel lorem vitae lectus tempor viverra.
          </p>
          <p className="card-text">
            <small className="text-muted">Published on May 20, 2024</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Updates;
