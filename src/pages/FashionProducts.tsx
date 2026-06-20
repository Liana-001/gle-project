
import "./FashionProducts.css";

const products = [
{
id: 1,
name: "Elegant Black Gown",
category: "Clothes",
image: "/images/products/gown1.jpg",
price: "₦18,500",
},
{
id: 2,
name: "Luxury Handbag",
category: "Bags",
image: "/images/products/bag1.jpg",
price: "₦22,000",
},
{
id: 3,
name: "Classic Heels",
category: "Shoes",
image: "/images/products/shoe1.jpg",
price: "₦15,000",
},
{
id: 4,
name: "Corporate Dress",
category: "Clothes",
image: "/images/products/gown2.jpg",
price: "₦20,000",
},
{
id: 5,
name: "Mini Handbag",
category: "Bags",
image: "/images/products/bag2.jpg",
price: "₦17,500",
},
{
id: 6,
name: "Premium Sandals",
category: "Shoes",
image: "/images/products/shoe2.jpg",
price: "₦13,000",
},
];

function FashionProducts() {
return (
<div className="fashion-products-page">

  <section className="fashion-hero">
    <h1>Clothes • Bags • Shoes</h1>

    <p>
      Explore elegant fashion pieces carefully selected
      to help you look confident, classy and timeless.
    </p>
  </section>

  <section className="fashion-filter-bar">
    <button>All</button>
    <button>Clothes</button>
    <button>Bags</button>
    <button>Shoes</button>
  </section>

  <section className="fashion-products-grid">
    {products.map((product) => (
      <div className="fashion-card" key={product.id}>

        <div className="fashion-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="fashion-card-content">

          <h3>{product.name}</h3>

          <p>{product.category}</p>

          <span>{product.price}</span>

          <button className="view-product-btn">
            View Product
          </button>

        </div>

      </div>
    ))}
  </section>

</div>

);
}

export default FashionProducts;