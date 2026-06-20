import "./MediaPage.css";

const MediaPage = () => {
  return (
    <div className="media-page">

      {/* HERO SECTION */}
      <section className="media-hero">

        <div className="media-left">
          <p className="media-brand">
            Growth • Love • Elegance
          </p>

          <h1 className="media-title">
            Stories.<br />
            Conversations.<br />
            Moments.
          </h1>

          <p className="media-text">
            Explore podcasts, videos, photos and behind-the-scenes moments from my journey.
          </p>


       
        </div>

        <div className="media-right">
          <img
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
            alt="Media Hero"
          />
        </div>

      </section>


      <section className="media-videos">

  <h2 className="section-title">
    Latest Videos
  </h2>

  <div className="video-grid">

    {/* VIDEO CARD 1 */}
    <div className="video-card">
      <img src="https://source.unsplash.com/400x300/?fashion" />
      <div className="video-title">Elegance in Motion</div>
    </div>

    {/* VIDEO CARD 2 */}
    <div className="video-card">
      <img src="https://source.unsplash.com/400x300/?podcast" />
      <div className="video-title">The GLE Conversation</div>
    </div>

    {/* VIDEO CARD 3 */}
    <div className="video-card">
      <img src="https://source.unsplash.com/400x300/?lifestyle" />
      <div className="video-title">Soft Life Stories</div>
    </div>

    {/* VIDEO CARD 4 */}
    <div className="video-card">
      <img src="https://source.unsplash.com/400x300/?studio" />
      <div className="video-title">Behind the Scenes</div>
    </div>

    {/* VIDEO CARD 5 */}
    <div className="video-card">
      <img src="https://source.unsplash.com/400x300/?beauty" />
      <div className="video-title">Glow & Grace</div>
    </div>

    {/* VIDEO CARD 6 */}
    <div className="video-card">
      <img src="https://source.unsplash.com/400x300/?camera" />
      <div className="video-title">Creative Talks</div>
    </div>

  </div>

</section>


<section className="media-podcast">

  <h2 className="section-title">
    Podcast Corner
  </h2>

  <div className="podcast-grid">

    <div className="podcast-card">
      <img src="https://source.unsplash.com/400x300/?microphone" />
      <h3>Finding Your Voice</h3>
      <p>Growth • Confidence • Identity</p>
    </div>

    <div className="podcast-card">
      <img src="https://source.unsplash.com/400x300/?studio,recording" />
      <h3>Soft Life Conversations</h3>
      <p>Love • Lifestyle • Elegance</p>
    </div>

    <div className="podcast-card">
      <img src="https://source.unsplash.com/400x300/?speaking" />
      <h3>The GLE Journey</h3>
      <p>Brand • Story • Growth</p>
    </div>

  </div>

</section>


<section className="media-gallery">

  <h2 className="section-title">
    Visual Stories
  </h2>

  <div className="gallery-grid">

    <img src="https://source.unsplash.com/400x400/?fashion,woman" />
    <img src="https://source.unsplash.com/400x400/?event,host" />
    <img src="https://source.unsplash.com/400x400/?lifestyle,blackwoman" />
    <img src="https://source.unsplash.com/400x400/?microphone,studio" />
    <img src="https://source.unsplash.com/400x400/?fashion,portrait" />
    <img src="https://source.unsplash.com/400x400/?redcarpet" />

  </div>

</section>

<section className="media-cta">

  <div className="cta-box">

    <h2>
      Join the GLE Community
    </h2>

    <p>
      Get exclusive updates, behind-the-scenes content, and new releases
      from Growth • Love • Elegance.
    </p>

    <div className="cta-input">
      <input
        type="email"
        placeholder="Enter your email"
      />

      <button>
        Join Now
      </button>
    </div>

  </div>

</section>

    </div>
  );
};

export default MediaPage;