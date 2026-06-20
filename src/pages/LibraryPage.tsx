import React, { useState } from "react";
import "./LibraryPage.css";

const LibraryPage = () => {

  // =========================
  // EBOOKS
  // =========================

  const ebooks = [
    { title: "Timeless Elegance", author: "Liana" },
    { title: "The Growth Journal", author: "Liana" },
    { title: "Soft Life With Purpose", author: "Liana" },
    { title: "Fashion & Identity", author: "Liana" },
    { title: "Building Your Personal Brand", author: "Liana" },
    { title: "The Elegant Woman's Guide", author: "Liana" },
  ];

  const [ebookPage, setEbookPage] = useState(0);
  const perPage = 3;

  const visibleEbooks = ebooks.slice(
    ebookPage * perPage,
    ebookPage * perPage + perPage
  );

  // =========================
  // ARTICLES
  // =========================

  const articles = [
    { title: "Why Elegance Still Matters", author: "Liana" },
    { title: "Lessons I Learned At 25", author: "Liana" },
    { title: "Soft Life Discipline", author: "Liana" },
    { title: "Building Confidence Slowly", author: "Liana" },
    { title: "Growth Is Not Linear", author: "Liana" },
    { title: "Becoming Your Higher Self", author: "Liana" },
  ];

  const [articlePage, setArticlePage] = useState(0);

  const visibleArticles = articles.slice(
    articlePage * perPage,
    articlePage * perPage + perPage
  );

  // =========================
  // COMMUNITY ARTICLES
  // =========================

  const community = [
    { title: "The Day I Grew Up", author: "Amina K." },
    { title: "My Fashion Journey", author: "Sarah M." },
    { title: "Rebuilding My Confidence", author: "Daniel A." },
    { title: "Learning Self Love", author: "Grace O." },
    { title: "Finding My Voice", author: "Michael E." },
    { title: "Becoming Strong Again", author: "Ella B." },
  ];

  const [communityPage, setCommunityPage] = useState(0);

  const visibleCommunity = community.slice(
    communityPage * perPage,
    communityPage * perPage + perPage
  );

  return (
    <div className="library-page">

      {/* HERO */}
      <section className="library-hero">
        <h1>GLE Library</h1>
        <p>Books, articles and stories that shape elegance and growth.</p>
      </section>

      {/* =========================
          EBOOK SECTION
      ========================= */}
      <section className="library-section">

        <h2>Featured E-Books</h2>

        <div className="library-grid">

          {visibleEbooks.map((book, i) => (
            <div className="library-card" key={i}>
              <div className="card-image"></div>
              <h3>{book.title}</h3>
              <p>By {book.author}</p>

              {/* DOWNLOAD BUTTON */}
              <button className="download-btn">
                Download
              </button>
            </div>
          ))}

        </div>

        <div className="pagination">

          <button
            className="view-less"
            disabled={ebookPage === 0}
            onClick={() => setEbookPage(ebookPage - 1)}
          >
            View Less
          </button>

          <button
            className="view-more"
            disabled={(ebookPage + 1) * perPage >= ebooks.length}
            onClick={() => setEbookPage(ebookPage + 1)}
          >
            View More
          </button>

        </div>

      </section>

      {/* =========================
          ARTICLES SECTION
      ========================= */}
      <section className="library-section">

        <h2>Articles</h2>

        <div className="library-grid">

          {visibleArticles.map((a, i) => (
            <div className="library-card" key={i}>
              <div className="card-image"></div>
              <h3>{a.title}</h3>
              <p>By {a.author}</p>

              {/* READ BUTTON */}
              <button className="read-btn">
                Read
              </button>
            </div>
          ))}

        </div>

        <div className="pagination">

          <button
            className="view-less"
            disabled={articlePage === 0}
            onClick={() => setArticlePage(articlePage - 1)}
          >
            View Less
          </button>

          <button
            className="view-more"
            disabled={(articlePage + 1) * perPage >= articles.length}
            onClick={() => setArticlePage(articlePage + 1)}
          >
            View More
          </button>

        </div>

      </section>

      {/* =========================
          COMMUNITY SECTION
      ========================= */}
      <section className="library-section">

        <h2>Community Articles</h2>

        <div className="library-grid">

          {visibleCommunity.map((c, i) => (
            <div className="library-card" key={i}>
              <div className="card-image"></div>
              <h3>{c.title}</h3>
              <p>By {c.author}</p>

              {/* READ BUTTON */}
              <button className="read-btn">
                Read
              </button>
            </div>
          ))}

        </div>

        <div className="pagination">

          <button
            className="view-less"
            disabled={communityPage === 0}
            onClick={() => setCommunityPage(communityPage - 1)}
          >
            View Less
          </button>

          <button
            className="view-more"
            disabled={(communityPage + 1) * perPage >= community.length}
            onClick={() => setCommunityPage(communityPage + 1)}
          >
            View More
          </button>

        </div>

      </section>

    </div>
  );
};

export default LibraryPage;