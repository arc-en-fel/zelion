import  { useState, useEffect, useRef } from "react";
import "./App.css";
import Particles from "./Particles";
import TiltedCard from './TiltedCard';
import ScrollReveal from './ScrollReveal';
import AuroraCursor from './AuroraCursor';
import emailjs from "@emailjs/browser";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Lock body scroll when menu is open
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';

    // Optional cleanup (just in case)
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <div className="navbar glass">
      <img src="/images/logo3.png" alt="Logo" className="logo-img" />
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(prev => !prev)}
      >
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
        <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
        <li><a href="#offers" onClick={() => setMenuOpen(false)}>Offers</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </div>
  );
}



function Home() {
  return (
    <section
      id="home"
      className="section"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <ScrollReveal>
        Elevate your cricket experience with Zelion
      </ScrollReveal>
      <Particles
        particleColors={['#ffffff', '#1e90ff']}
        particleCount={200}
        particleSpread={10}
        speed={0.2}
        particleBaseSize={80}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <TiltedCard
          imageSrc="/images/logo4.png"
          altText="Zelion Logo"
          containerHeight="200px"
          containerWidth="200px"
          imageHeight="200px"
          imageWidth="200px"
          captionText="Zelion"
          scaleOnHover={1.2}
          rotateAmplitude={12}
          showTooltip={false}
          displayOverlayContent={false}
        />
      </div>
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
        <div className="bento-card">🌐 Global Reach</div>
      </div>
    </section>
  );
}

function Products() {
  return (
   <section id="products" className="products-showcase">
  <h2 className="products-title">Jersey Spotlight</h2>

  <div className="product-hero">
    <img
      src="/images/jrs.png"
      alt="Jersey"
      className="product-core"
    />

    {/* Feature Tags */}
    <div className="feature-tag top-left">CUSTOM FIT</div>
    <div className="feature-tag top-right">PREMIUM FABRIC</div>
    <div className="feature-tag bottom-left">PERMEABLE</div>
    <div className="feature-tag bottom-right">ANTI-ODOR TECH</div>
  </div>
</section>

  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <h2>What Our Customers Say</h2>
      <p style={{ marginBottom: "2rem", color: "#ccc" }}>
        Trusted by players at every level — from beginners to professionals.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        maxWidth: "1000px",
        width: "100%",
        padding: "0 1rem"
      }}>
        <div style={testimonialCardStyle}>
          <p>"Zelion's bat quality is exceptional! I've never played better."</p>
          <strong>— Rohan Singh, Club Cricketer</strong>
        </div>
        <div style={testimonialCardStyle}>
          <p>"Fast delivery and top-notch gloves. Would recommend to anyone."</p>
          <strong>— Meera Patel, State Player</strong>
        </div>
        <div style={testimonialCardStyle}>
          <p>"Customer support helped me find the perfect kit size. A+ service."</p>
          <strong>— Arjun Rao, Parent</strong>
        </div>
      </div>
    </section>
  );
}

// Card style (reusable object)
const testimonialCardStyle = {
  background: "rgba(255, 255, 255, 0.05)",
  borderRadius: "12px",
  padding: "1.5rem",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  color: "#ddd",
  fontStyle: "italic",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  backdropFilter: "blur(6px)"
};


function Gallery() {
  const IMGS = [
    "/images/cricketkit.png",
    "/images/helmet.png",
    "/images/pad.png",
    "/images/ball1.png",
    "/images/bat.png",
    "/images/shorts.png",
  ];

  const faceCount = IMGS.length;
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef(null);
  const [radius, setRadius] = useState(getRadius());

  function getRadius() {
    const width = window.innerWidth;
    if (width < 480) return 180;
    if (width < 768) return 220;
    return 350;
  }

  useEffect(() => {
    const handleResize = () => setRadius(getRadius());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const angle = 360 / faceCount;

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      rotation.set(rotation.get() - angle);
    }, 3000);
    return () => clearInterval(autoplayRef.current);
  }, [rotation, angle]);

  return (
    <section id='gallery'className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-wrapper">
        <motion.div
          style={{ rotateY: rotation }}
          animate={controls}
          drag="x"
          onDrag={(_, info) => rotation.set(rotation.get() + info.offset.x * 0.2)}
          onDragEnd={(_, info) => {
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.1,
              transition: { type: "spring", stiffness: 50, damping: 20 },
            });
          }}
          className="gallery-carousel"
        >
          {IMGS.map((src, index) => (
            <div
              key={index}
              className="gallery-item"
              style={{
                transform: `rotateY(${index * angle}deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={src}
                alt={`gallery ${index}`}
                className="gallery-image"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
function Offers() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7vknb2w",
      "template_qpy7a4p",
      form.current,
      "EBAkWCqK5att3Jv3K"
    )
    .then(() => {
      alert("Email sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      alert("Failed to send email. Please try again.");
      console.error(error.text);
    });
  };

  return (
    <section id="offers" className="offers-section">
      <h2>Get Exclusive Offers</h2>

      {/* Sparkles + Fireworks */}
      <span className="sparkle sparkle1"></span>
      <span className="sparkle sparkle2"></span>
      <span className="sparkle sparkle3"></span>
      <span className="sparkle sparkle4"></span>
      <span className="firework fw1"></span>
      <span className="firework fw2"></span>
      <span className="firework fw3"></span>

      <div className="offer-banner-wrapper">
        <img src="images/ball.png" alt="Main Offer" className="offer-image" />
        <img src="images/offr.png" alt="Side Offer 1" className="offer-image" />
        <img src="images/bat.png" alt="Side Offer 2" className="offer-image" />
      </div>

      <form ref={form} onSubmit={sendEmail} className="offer-form">
        <input
          type="email"
          name="user_email"
          placeholder="your@gmail.com"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

function ContactUs() {
  return (
    <section id="contact" className="contact-section">
      <div className="glass-bg-drops">
        <span className="drop drop1" />
        <span className="drop drop2" />
        <span className="drop drop3" />
      </div>

      <h2 className="contact-heading">Get in Touch</h2>

      <div className="contact-glass">
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
        >
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-meta">
          📧 <a href="mailto:support@zelioncricket.com">support@zelioncricket.com</a>
          <br />
          ☎️ <a href="tel:+919876543210">+91 98765 43210</a>
        </div>
      </div>
    </section>
  );
}
function App() {
  return (
    <div>
       <AuroraCursor /> 
      <Navbar />
      <Home />
      <About />
      <Products />
      <Testimonials />
      <Gallery />
      <Offers />
      <ContactUs />
    </div>
  );
}

export default App;
