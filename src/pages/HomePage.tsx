import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="home-hero-image">
          <img src="/ceo.png" alt="My Portrait" />
        </div>

        <div className="home-hero-text">
          <h1>Welcome to My World</h1>
          <h2>Growth. Love. 
            Elegance.
          </h2>
          <p>
            A platform dedicated to timeless styles, personal growth, 
            inspiring stories and resources that elevate your life.
          </p>
        </div>
      </section>

      {/* FEATURE BOXES */}
      <section className="home-features">

        <div className="feature-card">
             <img src="/sm.png" alt="My Portrait" />
          <h3>About Me</h3>
          <p>Learn more about my journey and vision.</p>
           <button className="card-button">Explore</button>
        </div>

        <div className="feature-card">
             <img src="/new pic.png" alt="My Portrait" />
          <h3>My Passion</h3>
          <p>Curated fashion piece that tells a story.</p>
           <button className="card-button">Explore</button>
        </div>

        <div className="feature-card">
             <img src="/pc.jpeg" alt="My Portrait" />
          <h3>Media</h3>
          <p>Videos, interviews, and creative content.</p>
           <button className="card-button">Explore</button>
        </div>

     

        <div className="feature-card">
             <img src="/LAP.jpg" alt="My Portrait" />
          <h3>E-Book</h3>
          <p>My upcoming digital book collection.</p>
           <button className="card-button">Explore</button>
        </div>

      </section>

    </div>
  );
}

export default HomePage;