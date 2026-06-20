import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}

      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About GLE</h1>

          <p>
            Growth • Love • Elegance
          </p>

          <span>
            A platform where fashion, technology,
            storytelling, media, and personal growth
            come together to inspire transformation.
          </span>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section className="about-overview">

        <div className="overview-card">

          <h2>About Me</h2>

          <p>
            Hi, I'm Liana.
            I am a content creator, fashion entrepreneur,
            storyteller, red carpet host, video editor,
            and web developer passionate about helping
            people grow with confidence and elegance. I have always believed that life could be 
            beautiful.

Not because life has been perfect, but because I have never allowed my circumstances 
to define what is possible for me.

Over the years, I have experienced loss, change, uncertainty, and challenges
 that could have convinced me to settle for less. Instead, each season taught me resilience.
 Every challenge became an invitation to grow stronger, think bigger, 
 and continue moving forward.

I am someone who believes that people are capable of becoming more than
 their current situation. I believe that life happens to everyone, but what we choose to
  become afterward matters even more.

Today, I am building a life rooted in growth, purpose, elegance, creativity, 
and impact. My story is still being written, but one thing remains true: 
I will always choose growth over limitation and possibility over fear. 
I am becoming a woman of impact, influence, and excellence.

I see a future where my work reaches people across industries, communities, and countries.
 A future where I have built successful businesses, created opportunities for others,
  and developed platforms that help people discover their purpose, confidence, and potential.

I am becoming a storyteller, educator, entrepreneur, and builder who uses creativity, 
knowledge, and experience to transform lives.

Most importantly, I am becoming the kind of woman who leaves people better
 than she found them.
          </p>

        </div>

        <div className="overview-card">

          <h2>About GLE</h2>

          <p>
            GLE stands for Growth, Love & Elegance.
            It is a digital ecosystem created to inspire
            growth through stories, technology, fashion,
            creativity, and community. Beyond a name, it is a living expression of transformation.

It is a creative ecosystem built to help people evolve into their best
 selves through storytelling, fashion, education, and intentional living.
  GLE is not just a platform; it is a journey of becoming.

At its core, GLE represents the belief that growth is continuous, 
love is foundational, and elegance is a lifestyle that reflects how we think, speak,
 create, and show up in the world.

GLE exists at the intersection of media, fashion, and education. 
Through storytelling and real-life conversations, it opens a space where people 
can reflect, learn, and feel seen. Through fashion, it expresses identity and confidence. 
Through education, it empowers individuals with digital skills, creativity,
 and knowledge for the future.

This is more than content — it is a movement toward intentional living.

The GLE media ecosystem brings together podcasts, talk shows, and storytelling
 episodes that explore real human experiences, emotions, and growth journeys. 
 It is designed to inspire clarity, self-awareness, and emotional strength.

The fashion dimension of GLE expresses elegance as a form of identity. 
It celebrates how people choose to present themselves to the world — 
not just as appearance, but as energy, confidence, and presence.

The education dimension focuses on empowerment through knowledge, 
especially in tech, digital skills, and creative development. It reflects the belief that
 access to knowledge changes the trajectory of a person’s life.

GLE is ultimately about becoming.

Becoming more aware.
Becoming more intentional.
Becoming more elegant in thought and action.
Becoming the best version of yourself.
          </p>

        </div>

        <div className="overview-card">

          <h2>Mission & Vision</h2>

          <p>
            To build a generation of people who are
            confident, skilled, elegant, and capable
            of creating meaningful impact through
            learning and self-development. My work lives at the intersection of fashion,
             technology, and media.

Fashion, for me, is more than clothing. It is a way of life. 
It is a reflection of identity, confidence, personality, and self-expression. Through
 Timeless Pieces by Liana, I hope to help people embrace elegance in a way that feels
  authentic to them.

Technology represents freedom, innovation, and opportunity. 
My coding journey is not only about learning a skill; it is about creating 
solutions, building digital experiences, teaching others, and participating in the
 future of a rapidly evolving world.

Media is where storytelling comes alive. Through GLE, Moments with Liana,
 my podcast conversations, and my content platforms, I create spaces where
  people can learn, reflect, laugh, grow, and feel seen.

Together, these three worlds allow me to educate, inspire, and empower others
 in meaningful ways.
          </p>

        </div>

      </section>

      {/* VISION */}

      <section className="vision-section">

        <div className="section-header">
          <h2>The Vision</h2>
        </div>

        <div className="vision-grid">

          <div className="vision-card">
            <h3>Fashion</h3>

            <p>
              Encouraging elegant living through timeless
              style and confidence.
            </p>
          </div>

          <div className="vision-card">
            <h3>Technology</h3>

            <p>
              Teaching practical digital skills that create
              opportunities and independence.
            </p>
          </div>

          <div className="vision-card">
            <h3>Storytelling</h3>

            <p>
              Sharing stories that inspire courage,
              growth, and transformation.
            </p>
          </div>

          <div className="vision-card">
            <h3>Community</h3>

            <p>
              Building meaningful relationships through
              shared learning and support.
            </p>
          </div>

        </div>

      </section>

      {/* WORK WITH GLE */}

      <section className="work-section">

        <div className="section-header">
          <h2>Work With GLE</h2>
        </div>

        <div className="work-grid">

          <div className="work-card">
            <h3>Tech Classes</h3>

            <p>
              Learn practical technology skills and
              digital tools.
            </p>
          </div>

          <div className="work-card">
            <h3>Elegance Classes</h3>

            <p>
              Discover confidence, etiquette,
              presentation, and elegant living.
            </p>
          </div>

          <div className="work-card">
            <h3>Podcast Guest</h3>

            <p>
              Share your story and inspire others
              through meaningful conversations.
            </p>
          </div>

          <div className="work-card">
            <h3>Mentorship</h3>

            <p>
              Receive guidance on personal growth,
              branding, and digital development.
            </p>
          </div>

        </div>

      </section>

      {/* COMMUNITY */}

      <section className="community-section">

        <div className="section-header">
          <h2>Join The GLE Community</h2>

          <p>
            Receive updates, opportunities,
            events, articles, and exclusive content.
          </p>
        </div>

        <form className="community-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <select>

            <option>
              Select Interest
            </option>

            <option>
              Tech Class
            </option>

            <option>
              Elegance Class
            </option>

            <option>
              Podcast Guest
            </option>

            <option>
              Mentorship
            </option>

            <option>
              General Community
            </option>

          </select>

          <button type="submit">
            Join Community
          </button>

        </form>

      </section>

      {/* CTA */}

      <section className="about-cta">

        <h2>Let's Grow Together</h2>

        <p>
          Whether you're looking to learn,
          collaborate, share your story,
          or transform your life,
          GLE welcomes you.
        </p>

        <button>
          Contact Me
        </button>

      </section>

    </div>
  );
}