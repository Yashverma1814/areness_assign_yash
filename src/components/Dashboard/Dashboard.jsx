import React from 'react';
import './Dashboard.css'; // The corresponding CSS file for styling
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="user-profile">
          <img src="user-avatar-url" alt="User" className="user-avatar" />
          <h2>Sundar Gurung</h2>
          <p>sundargurung360@gmail.com</p>
        </div>
        <nav className="sidebar-menu">
          <a href="/dashboard" className="active">Dashboard</a>
          <a href="/vital-tasks">Vital Task</a>
          <a href="/my-tasks">My Task</a>
          <a href="/task-categories">Task Categories</a>
          <a href="/settings">Settings</a>
          <a href="/help">Help</a>
        </nav>
            <Link to={"/"} className="logout">Logout</Link>
      </aside>

      <main className="content">
        <header className="content-header">
          <h1>Welcome back, Sundar 👋</h1>
          <div className="task-stats">
            <div>
              <p>Completed</p>
              <h2>84%</h2>
            </div>
            <div>
              <p>In Progress</p>
              <h2>46%</h2>
            </div>
            <div>
              <p>Not Started</p>
              <h2>13%</h2>
            </div>
          </div>
        </header>

        <section className="tasks-section">
          <div className="task-todo">
            <h2>To-Do</h2>
            <ul>
              <li>
                <h3>Attend Nischal’s Birthday Party</h3>
                <p>Buy gifts on the way and pick up cake from the bakery...</p>
                <p>Status: Not Started | Priority: Moderate</p>
              </li>
              <li>
                <h3>Landing Page Design for TravelDays</h3>
                <p>Get the work done by EOD and discuss with the client...</p>
                <p>Status: In Progress | Priority: Moderate</p>
              </li>
              <li>
                <h3>Presentation on Final Product</h3>
                <p>Make sure everything is functioning and prepare the team...</p>
                <p>Status: In Progress | Priority: Moderate</p>
              </li>
            </ul>
          </div>

          <div className="task-completed">
            <h2>Completed Tasks</h2>
            <ul>
              <li>
                <h3>Walk the dog</h3>
                <p>Status: Completed | Completed 2 days ago</p>
              </li>
              <li>
                <h3>Conduct Meeting</h3>
                <p>Status: Completed | Completed 2 days ago</p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
