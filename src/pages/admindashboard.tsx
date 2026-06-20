import React, { useState } from "react";
import "./admindashboard.css";

function AdminDashboard() {

// FORM STATE
const [product, setProduct] = useState({
name: "",
price: "",
category: "",
image: null,
});

const [video, setVideo] = useState({
title: "",
file: null,
});

// HANDLE PRODUCT CHANGE
const handleProductChange = (e) => {
setProduct({ ...product, [e.target.name]: e.target.value });
};

// HANDLE FILE CHANGE
const handleFileChange = (e) => {
setProduct({ ...product, image: e.target.files[0] });
};

// SUBMIT PRODUCT
const handleProductSubmit = (e) => {
e.preventDefault();
console.log("PRODUCT DATA:", product);
alert("Product added (frontend only for now)");
};

// VIDEO HANDLERS
const handleVideoChange = (e) => {
setVideo({ ...video, [e.target.name]: e.target.value });
};

const handleVideoFile = (e) => {
setVideo({ ...video, file: e.target.files[0] });
};

const handleVideoSubmit = (e) => {
e.preventDefault();
console.log("VIDEO DATA:", video);
alert("Video uploaded (frontend only)");
};

return (
<div className="admin-page">

  {/* SIDEBAR */}
  <div className="sidebar">
    <h2>GLE Admin</h2>

    <ul>
      <li>Dashboard</li>
      <li>Add Product</li>
      <li>Manage Products</li>
      <li>New Arrivals</li>
      <li>Jewelry</li>
      <li>Orders</li>
      <li>Ebooks</li>
      <li>Videos</li>
      <li>Messages</li>
    </ul>
  </div>

  {/* MAIN */}
  <div className="admin-main">

    <h1>Welcome, Liana 👑</h1>

    {/* STATS */}
    <div className="stats">

      <div className="stat-card">
        <h3>Products</h3>
        <p>120</p>
      </div>

      <div className="stat-card">
        <h3>Orders</h3>
        <p>45</p>
      </div>

      <div className="stat-card">
        <h3>Ebooks Sold</h3>
        <p>78</p>
      </div>

    </div>

    {/* PRODUCT FORM */}
    <div className="form-section">
      <h2>Add Product</h2>

      <form onSubmit={handleProductSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleProductChange}
        />

        <input
          type="text"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleProductChange}
        />

        {/* CATEGORY DROPDOWN */}
        <select
          name="category"
          value={product.category}
          onChange={handleProductChange}
        >
          <option value="">Select Category</option>
          <option value="clothes">Clothes</option>
          <option value="bags">Bags</option>
          <option value="shoes">Shoes</option>
          <option value="jewelry">Jewelry</option>
          <option value="newarrivals">New Arrivals</option>
        </select>

        <input type="file" onChange={handleFileChange} />

        <button type="submit">Add Product</button>

      </form>
    </div>

    {/* VIDEO UPLOAD SECTION */}
    <div className="form-section">
      <h2>Upload Video</h2>

      <form onSubmit={handleVideoSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Video Title"
          value={video.title}
          onChange={handleVideoChange}
        />

        <input type="file" onChange={handleVideoFile} />

        <button type="submit">Upload Video</button>

      </form>
    </div>

  </div>

</div>

);
}

export default AdminDashboard;