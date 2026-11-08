const express = require("express");
const router = express.Router();

const Article = require("../models/Article");

// GET ALL ARTICLES
router.get("/", async (req, res) => {
try {
const articles = await Article.find();
res.json(articles);
} catch (error) {
res.status(500).json({ message: "Failed to fetch articles" });
}
});

// CREATE ARTICLE
router.post("/", async (req, res) => {
try {
const { title, author, subtitle, category, description, content } = req.body;

const newArticle = new Article({
  title,
  author,
  subtitle,
  category,
  description,
  content,
});

const savedArticle = await newArticle.save();

res.status(201).json(savedArticle);

} catch (error) {
res.status(500).json({ message: "Failed to create article" });
}
});

module.exports = router;