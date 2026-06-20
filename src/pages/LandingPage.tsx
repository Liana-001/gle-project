import "./Landingpage.css";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



function LandingPage() {
  return (
    <div className="landing-page">


<div className="top-bar">
  <span className="name">L I A N A</span>
</div>

<div className="line"></div>

<div className="logo-under-line">
  <img src="/logo m.png" alt="GLE Logo" />
</div>


      {/* SECTION 1: HERO (BUILDING + TEXT) */}
      <section className="hero-section">
        <div className="hero-image">
          <img
            src="/gle.png"
            alt="GLE Building"
          />
        </div>

        <div className="hero-text">
          <h1>Growth Love & Elegance (GLE)</h1>

          <p>Growth, Love & Elegance (GLE) is a creative platform dedicated to storytelling, 
            lifestyle expression, and intentional living. It represents a blend of beauty,
             purpose, and personal evolution through fashion, media, and digital creativity.
          </p>
        </div>
      </section>

      {/* SECTION 2: ABOUT YOU */}
      <section className="about-section">
        <div className="about-image">
          <img
            src="/ceo.png"
            alt="My Portrait"
          />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
           I’m Liana — a creative storyteller, fashion enthusiast, and digital creator passionate 
            about elegance and growth. I use content, style, and storytelling to
             inspire women to embrace confidence, beauty, and purpose in their everyday lives
          </p>
        </div>
      </section>


<section className="affirmation-section">

  {/* LEFT IMAGE */}
  <div className="affirmation-image">
    <img src="/affirm.png" alt="inspiration" />
  </div>

  {/* RIGHT AFFIRMATIONS */}

  <div
   className="affirmation-box-wrapper">

  <div className="affirmation-text">

    <div className="affirmation-card">
      You are becoming everything you once only imagined. Even in silence, 
      even in uncertainty, growth is still unfolding and nothing about your journey is a waste.
    </div>

    <div className="affirmation-card">
      Your timing is not behind, its being refined. Every season is shaping you into something softer,
       stronger and more aware. Trust your becoming..
    </div>

    <div className="affirmation-card">
      Elegance is not in appearance it is in alignment, it begins in how you think,
       how you carry yourself how youreturn yourself. You are already becoming it.
    </div>

  </div>
  </div>

</section>

<section className="explore-wrapper">

  <div className="message-side">
    {/* Rotating messages will go here later */}
  </div>

  <div className="explore-side">
    <h2>Ready to Explore More?</h2>

    <button className="explore-btn">
      Explore
    </button>
  </div>

</section>



      {/* SECTION 3: EMAIL SIGNUP */}
      <section className="email-section">
        <h2>Join the GLE Community</h2>
        <p>Get updates on new content, fashion drops, and upcoming books.</p>

        <input type="email" placeholder="Enter your email" />
        <button>Join Now</button>
      </section>



      {/* FOOTER */}
  
<footer className="footer">

  <div className="footer-content">

    <h2 className="footer-logo">GLE</h2>

    <p className="footer-text">
      Growth • Love • Elegance
    </p>

    <div className="footer-socials">

      <a href="https://wa.me/your-number" target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>

      <a href="https://instagram.com/yourpage" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>

      <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>

    </div>

  </div>

  <p className="footer-bottom">
    © 2026 Timeless Pieces by Liana. All rights reserved.
  </p>

</footer>


</div>

    
  );
}

export default LandingPage;