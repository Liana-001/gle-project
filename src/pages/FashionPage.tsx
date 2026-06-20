import "./FashionPage.css";

function FashionPage() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="home-hero-image">
          <img src="/fhero.jpeg" alt="My Portrait" />
        </div>

        <div className="home-hero-text">
          <h1>Timeless Pieces by Liana</h1>
          <h2> Elegance is timeless
          </h2>
          <p>
            Curated pieces made for every version of you.
          </p>
        </div>
      </section>

      {/* FEATURE BOXES */}
      <section className="home-features">

        <div className="feature-card">
             <img src="/curated.jpeg" alt="My Portrait" />
          <h3>Timeless Pieces</h3>
          <p>curated fashion pieces to stand out.</p>
           <button className="card-button">Explore</button>
        </div>

        <div className="feature-card">
             <img src="/jew.jpeg" alt="My Portrait" />
          <h3>Accessories</h3>
          <p>Styling your outfit is elegant.</p>
           <button className="card-button">Explore</button>
        </div>

        <div className="feature-card">
             <img src="/new.jpeg" alt="My Portrait" />
          <h3>New Arrival</h3>
          <p>Check out for our newly updated pieces.</p>
           <button className="card-button">Explore</button>
        </div>

      


      </section>

    </div>

  );
}

export default FashionPage;