import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="dashboard-stats">
        <div className="stat-card users">
          <h2>Total Users</h2>
          <p>1,200</p>
        </div>
        <div className="stat-card courses">
          <h2>Total Events</h2>
          <p>40</p>
        </div>
        <div className="stat-card categories">
          <h2>Event Categories</h2>
          <ul>
            <li>Birthday party: 15</li>
            <li>fairwell: 10</li>
            <li>Graduation party: 8</li>
            <li>Baby shower event: 7</li>
          </ul>
        </div>
        <div className="stat-card requests">
          <h2>Enrollment Requests</h2>
          <p>50</p>
        </div>
      </div>
      <div className="dashboard-recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          
          <li>New event "Baby shower event" added to the platform.</li>
          <li>Enrollment request received for the "Baby shower" event.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;