import React from "react";
import "./AddArticlePage.css";

function AddArticlePage() {
  return (
    <div className="article-editor">

      <div className="editor-header">
        <h1>New Article</h1>
        <p>Create and publish a new article for the GLE Library.</p>
      </div>

      <form className="article-form">

        <label>Article Title</label>
        <input
          type="text"
          placeholder="Enter article title"
        />

        <label>Subtitle (Optional)</label>
        <input
          type="text"
          placeholder="Enter subtitle"
        />

        <label>Featured Image</label>
        <input type="file" />

        <label>Category</label>
        <select>
          <option>Personal Growth</option>
          <option>Fashion</option>
          <option>Lifestyle</option>
          <option>Career</option>
          <option>Business</option>
        </select>

        <label>Author</label>
        <input
          type="text"
          placeholder="Liana"
        />

        <label>Short Description</label>
        <textarea
          rows={3}
          placeholder="A short description of the article..."
        />

        <label>Article Content</label>
        <textarea
          rows={12}
          placeholder="Start writing your article here..."
        />

        <div className="editor-buttons">
          <button type="button" className="draft-btn">
            Save Draft
          </button>

          <button type="submit" className="publish-btn">
            Publish Article
          </button>
        </div>

      </form>

    </div>
  );
}

export default AddArticlePage;