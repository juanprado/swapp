import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to Swapp!</h1>
    <div className="o-home__links">
      <Link to="/dashboard">See My Items</Link>
      <Link to="/feed">See My Feed</Link>
    </div>
  </div>
);

export default Home;
