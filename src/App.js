import React from "react";
import "./App.css";





function Navbar() {
  return (
    <nav className="navbar glass">
      <div className="logo">
        <img src="/images/logo3.png" alt="Zelion Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
    
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <section id="home" className="section">
      <img src="/images/logo4.png" alt="Zelion Logo Center" className="logo-center-img" />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bento-about-section">
      <h2 className="bento-title">About Zelion</h2>
      <p className="bento-description">
        At Zelion, we are committed to redefining the cricket experience. As a premier destination
        for high-quality cricket gear and accessories, we cater to players of all levels—from grassroots
        enthusiasts to international professionals. Our curated collections include cutting-edge bats,
        ergonomically designed protective gear, performance-driven apparel, and exclusive merchandise
        from the world's leading cricket brands. Backed by a team of cricket specialists, Zelion offers
        personalized guidance and a passion for performance that inspires excellence on and off the pitch.
      </p>

      <div className="bento-grid">
        <div className="bento-card">🏏 Premium Cricket Bats</div>
        <div className="bento-card">🛡️ Advanced Protection Gear</div>
        <div className="bento-card">👕 Performance Apparel</div>
        <div className="bento-card">🌍 Global Brand Selection</div>
        <div className="bento-card">🧠 Expert Cricket Guidance</div>
        <div className="bento-card">🎯 Precision-Fit Equipment</div>
        <div className="bento-card">🚚 Fast & Reliable Delivery</div>
        <div className="bento-card">⭐ Trusted by Professionals</div>
        <div className="bento-card">💬 24/7 Customer Support</div>
      </div>
    </section>
  );
}



function Products() {
  return (
    <section id="products" className="products-section">
      <h2 className="products-title">Our Products</h2>
      <p className="products-description">Explore our premium range of cricket gear and accessories.</p>

      <div className="product-container">
        <img
          src="/images/jrs.png" // Make sure the image is placed at public/images/product-image.jpg
          alt="Featured Product"
          className="product-image"
        />

        <a href="https://zelioncricket.com" target="_blank" rel="noopener noreferrer">
          <button className="product-button">Visit Store</button>
        </a>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <h2>Testimonials</h2>
      <p>See what our customers say!</p>
    </section>
  );
}



function ContactUs() {
  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>
      <p>Get in touch through this section.</p>
    </section>
  );
}
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Products />
      <Testimonials />
      <ContactUs />
    </div>
  );
}


export default App;
