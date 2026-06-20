import React from "react";
import "./product-detail.css";

function ProductDetail() {
return (
<div className="product-detail-page">

  <div className="product-container">

    {/* LEFT SIDE - IMAGE */}
    <div className="product-image-section">
      <img
        src="/images/products/gown1.jpg"
        alt="White Evening Dress"
      />
    </div>

    {/* RIGHT SIDE - DETAILS */}
    <div className="product-info-section">

      <h1>White Evening Dress</h1>

      <p className="price">₦18,500</p>

      <p className="description">
        Elegant white evening dress designed for classy events,
        dinner nights, and special occasions. Made with premium fabric
        for comfort and confidence.
      </p>

      <div className="sizes">
        <h4>Available Sizes:</h4>
        <span>M</span>
        <span>L</span>
      </div>

      <p className="stock">Available in Stock ✔️</p>

      {/* QUANTITY */}
      <div className="quantity">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>

      {/* ACTION BUTTONS */}
      <div className="actions">
        <button className="cart-btn">Add to Cart</button>
        <button className="whatsapp-btn">
          Order on WhatsApp
        </button>
      </div>

    </div>

  </div>

</div>

);
}

export default ProductDetail;