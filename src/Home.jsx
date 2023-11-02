import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <h2>Welcome to Our Coffee Shop & Bakery</h2>
        <p>Discover the finest coffee and baked goods in town.</p>
        <Link to="/menu" className="btn btn-primary">View Menu</Link>
      </div>
    </section>
  );
};

export default Home;
