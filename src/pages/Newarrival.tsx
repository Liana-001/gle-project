
import "./Newarrival.css";

const newArrivals = [
{
id: 1,
name: "Silk Evening Dress",
image: "/images/new/silk-dress.jpg",
price: "₦25,000",
category: "Clothes",
},
{
id: 2,
name: "Luxury Mini Bag",
image: "/images/new/mini-bag.jpg",
price: "₦18,000",
category: "Bags",
},
{
id: 3,
name: "Gold Jewelry Set",
image: "/images/new/jewelry.jpg",
price: "₦30,000",
category: "Jewelry",
},
{
id: 4,
name: "Classic Heels",
image: "/images/new/heels.jpg",
price: "₦20,000",
category: "Shoes",
},
{
id: 5,
name: "Elegant Gown",
image: "/images/new/gown2.jpg",
price: "₦28,000",
category: "Clothes",
},
{
id: 6,
name: "Leather Belt",
image: "/images/new/belt.jpg",
price: "₦8,000",
category: "Accessories",
},
];

function NewArrivals() {
return (
<div className="new-arrivals-page">

  {/* HERO SECTION */}
  <div className="new-arrivals-hero">
    <h1>New Arrivals</h1>
    <p>Fresh, stylish and newly added fashion pieces curated for elegance and confidence.</p>
  </div>

  {/* GRID SECTION */}
  <div className="new-arrivals-grid">

    {newArrivals.map((item) => (
      <div className="arrival-card" key={item.id}>

        <div className="arrival-image">
          <img src={item.image} alt={item.name} />
        </div>

        <div className="arrival-info">
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <span>{item.price}</span>

          <button>View Product</button>
        </div>

      </div>
    ))}

  </div>

</div>

);
}

export default NewArrivals;