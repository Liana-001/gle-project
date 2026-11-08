const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
title: {
type: String,
required: true,
},

author: {
type: String,
required: true,
},

subtitle: {
type: String,
},

category: {
type: String,
},

description: {
type: String,
},

content: {
type: String,
required: true,
},
});

module.exports = mongoose.model("Article", articleSchema);
