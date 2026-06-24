const express = require("express");
const router = express.Router();

const articles = require("../data/articles");

router.get("/", (req, res) => {
  res.json(articles);
});

router.get("/:id", (req, res) => {
  const articleId = parseInt(req.params.id);

  const article = articles.find(
    (item) => item.id === articleId
  );

  if (!article) {
    return res.status(404).json({
      message: "Article not found",
    });
  }

  res.json(article);
});

router.post("/", (req, res) => {
  const newArticle = {
    id: articles.length + 1,
    title: req.body.title,
    author: req.body.author,
  };

  articles.push(newArticle);

  res.status(201).json({
    message: "Article created successfully",
    article: newArticle,
  });
});


router.put("/:id", (req, res) => {
  const articleId = parseInt(req.params.id);

  const article = articles.find(
    (item) => item.id === articleId
  );

  if (!article) {
    return res.status(404).json({
      message: "Article not found",
    });
  }

  article.title = req.body.title || article.title;
  article.author = req.body.author || article.author;

  res.json({
    message: "Article updated successfully",
    article,
  });
});

router.delete("/:id", (req, res) => {
  const articleId = parseInt(req.params.id);

  const articleIndex = articles.findIndex(
    (item) => item.id === articleId
  );

  if (articleIndex === -1) {
    return res.status(404).json({
      message: "Article not found",
    });
  }

  const deletedArticle = articles.splice(articleIndex, 1);

  res.json({
    message: "Article deleted successfully",
    article: deletedArticle[0],
  });
});

module.exports = router;