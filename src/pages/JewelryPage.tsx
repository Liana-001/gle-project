import React from "react";
import "./jewelrypage.css";

const jewelryItems = [
{
id: 1,
name: "Gold Necklace",
image: "/images/jewelry/necklace.jpg",
price: "₦15,000",
},
{
id: 2,
name: "Luxury Earrings",
image: "/images/jewelry/earrings.jpg",
price: "₦10,000",
},
{
id: 3,
name: "Elegant Belt",
image: "/images/jewelry/belt.jpg",
price: "₦8,000",
},
{
id: 4,
name: "Luxury Perfume",
image: "/images/jewelry/perfume.jpg",
price: "₦12,000",
},
{
id: 5,
name: "Gold Bracelet",
image: "/images/jewelry/bracelet.jpg",
price: "₦9,500",
},
{
id: 6,
name: "Classic Ring Set",
image: "/images/jewelry/rings.jpg",
price: "₦11,000",
},
];

function JewelryPage() {
return (
<div className="jewelry-page">

  {/* HERO SECTION */}
  <div className="jewelry-hero">
    <h1>Jewelry & Accessories</h1>
    <p>
      Elegant accessories designed to elevate your style and complete your look.
    </p>
  </div>

  {/* GRID SECTION */}
  <div className="jewelry-grid">

    {jewelryItems.map((item) => (
      <div className="jewelry-card" key={item.id}>

        <div className="jewelry-image">
          <img src={item.image} alt={item.name} />
        </div>

        <div className="jewelry-info">
          <h3>{item.name}</h3>
          <span>{item.price}</span>
          <button>View Product</button>
        </div>

      </div>
    ))}

  </div>

</div>

);
}

export default JewelryPage;