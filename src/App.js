 

import React from 'react';
import './App.css';
import { FaPhone, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

function App() {
  return (
    <div className="app">
      {/* Top Notification Bar */}
      <div className="top-bar">
        <p>Free shipping world wide for all orders over $199 <a href="#">Shop Now</a></p>
        <div className="top-right">
          <span><FaMapMarkerAlt /> Delhi, India</span>
          <span>Blog</span>
          <span>FAQ's</span>
        </div>
      </div>

      {/* Header Section */}
      <header className="header">
        <div className="logo">Gofy <span>Kids Mall</span></div>
        <div className="search-bar">
          <select>
            <option>All Categories</option>
          </select>
          <input type="text" placeholder="Search products..." />
        </div>
        <div className="header-right">
          <span className="support"><FaPhone /> +91 234 786 9507</span>
          <span><FaUser /> Sign In / Account</span>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Shop By Age</a>
        <a href="#">Shop By Collection</a>
        <a href="#">New Arrivals</a>
        <a href="#">Trending</a>
        <a href="#">Offers</a>
        <a href="#">Super Deals Product</a>
      </nav>

      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-text">
          <p className="banner-title">THE CREATIVE WORLD</p>
          <h1>Girls Party Dresses<br />White Lace Dress<br />Bohemian Dress</h1>
          <button className="shop-btn">SHOP NOW</button>
        </div>
        <img src="https://www.shutterstock.com/image-photo/portrait-cute-children-on-color-260nw-1501231871.jpg" alt="Kids Banner" className="banner-img" />
      </section>

      {/* Category Section */}
      <section className="categories">
        <p className="category-note">Customize icon according to Categorywise <span>More Category Animation Provide</span></p>
        <h2>Shop By Categories</h2>
        <p className="category-desc">Lorem ipsum dolor sit amet consectetur. Id fames there are many vulputate eget dolor.</p>
        <div className="category-grid">
          <div className="category-card">
            <img src="https://images.meesho.com/images/products/160155833/hi7po_512.webp" alt="Stylish Frok" />
            <p>Stylish Frok</p>
          </div>
          <div className="category-card">
            <img src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200" alt="Kids Books" />
            <p>Kids Books</p>
          </div>
          <div className="category-card">
            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOPrEJRe6o8-XGLKog0x6wFdJ6Tnn9NFCjLvp_p8V1BrES744s_uht5zc8p6NqNNhH-QfzCtb4vfJ1TFpquh65YrNtVC0atQyONJmu8XWkxaDMcW87-6spSQ" alt="Stylish Hoodie" />
            <p>Stylish Hoodie</p>
          </div>
          <div className="category-card">
            <img src="https://images-cdn.ubuy.co.in/6650a482da935263c7208e69-55cm-reborn-baby-dolls-full-body.jpg" alt="Dolls" />
            <p>Dolls</p>
          </div>
          <div className="category-card">
            <img src="https://4.imimg.com/data4/OD/LF/MY-1969568/educational-toys.jpg" alt="Educational Toy" />
            <p>Educational Toy</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;