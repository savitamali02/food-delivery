import React, { useState } from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import Cards from '../../components/Layout/Cards';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import "../../styles/Menu.css";
import image1 from '../../assets/shop/image-1.jpg';
import image2 from '../../assets/shop/image-2.jpg';
import image3 from '../../assets/shop/image-3.jpg';
import image4 from '../../assets/shop/image-4.jpg';
import image5 from '../../assets/shop/imge-5.jpg';
import image6 from '../../assets/shop/image-6.jpg';
import image7 from '../../assets/shop/image-7.jpg';
import image8 from '../../assets/shop/image-8.jpg';
import image9 from '../../assets/shop/image-9.jpg';
import image10 from '../../assets/shop/image-10.jpg';
import image11 from '../../assets/shop/image-11.jpg';
import image12 from '../../assets/shop/image-12.jpg';
import image13 from '../../assets/shop/image-13.jpg';
import image14 from '../../assets/shop/image-14.jpg';
import image15 from '../../assets/shop/image-15.jpg';
import image16 from '../../assets/shop/image-16.jpg';
import image17 from '../../assets/shop/image-17.jpg';
import image18 from '../../assets/shop/image-18.jpg';
import image19 from '../../assets/shop/image-19.jpeg';
import image20 from '../../assets/shop/image-20.jpg';
import image21 from '../../assets/shop/image-21.jpg';
import image22 from '../../assets/shop/image-22.jpg';
import image23 from '../../assets/shop/image-23.jpg';
import image24 from '../../assets/shop/image-24.jpg';
// Add categories
const categories = [
  "All Menu", 
  "South Indian", 
  "Starter", 
  "Soup", 
  "Pizza", 
  "Roll", 
  "Dessert"
];

const menuItems = [
  {
    id: 1,
    image: image1,
    rating: 4,
    title: "Idli Sambar",
    paragraph: "Soft rice cakes with spicy, tangy lentil curry.",
    price: 80,
    category: "South Indian",
    type:"Veg",
  },
  {
    id: 2,
    image: image2,
    rating: 5,
    title: "Maisur Dosa",
    paragraph: "Crispy rice crepe with spicy potato filling, served with sambar.",
    price: 100,
    category: "South Indian",
    type:"Veg",

  },
  {
    id: 3,
    image: image3,
    rating: 5,
    title: "Curd Rice",
    paragraph: "Comforting South Indian rice with curd and mild spices.",
    price: 80,
    category: "South Indian",
    type:"Veg",

  },
  {
    id: 4,
    image: image4,
    rating: 5,
    title: "Meduvada Sambar",
    paragraph: "Crispy lentil fritters served with flavorful sambar.",
    price: 80,
    category: "South Indian",
    type:"Veg",

  },
  {
    id: 5,
    image: image5,
    rating: 5,
    title: "Paneer Tikka",
    paragraph: "Grilled paneer cubes marinated in spicy yogurt mix.",
    price: 150,
    category: "Starter",
    type:"Veg",

  }, {
    id: 6,
    image: image6,
    rating: 4,
    title: "Garlic Toast",
    paragraph: "Grilled paneer cubes marinated in spicy yogurt mix.",
    price: 180,
    category: "Starter",
    type:"Veg",

  },
  {
    id: 7,
    image: image7,
    rating: 3.5,
    title: "Chiken Lollipop",
    paragraph: "Crispy fried chicken wings with spicy marinade.",
    price: 200,
    category: "Starter",
    type:"Non-Veg",
  },
  {
    id: 8,
    image: image8,
    rating: 4.5,
    title: "Potato Fries",
    paragraph: "Crispy golden potato fries, lightly salted.",
    price: 80,
    category: "Starter",
    type:"Veg",

  },
  {
    id: 9,
    image: image9,
    rating: 3.5,
    title: "Mashroom Soup",
    paragraph: "Creamy mushroom soup with rich, earthy flavors.",
    price: 120,
    category: "Soup",
    type:"Veg",

  },
  {
    id: 10,
    image: image10,
    rating: 4.5,
    title: "Tomato Soup",
    paragraph: "Tangy and flavorful tomato soup, rich and comforting.",
    price: 120,
    category: "Soup",
    type:"Veg",

  },
  {
    id: 11,
    image: image11,
    rating: 4,
    title: "Vegetable Soup",
    paragraph: "Nutritious vegetable soup with mixed seasonal veggies.",
    price: 150,
    category: "Soup",
    type:"Veg",

  },
  {
    id: 12,
    image: image12,
    rating: 3.5,
    title: "Chicken Noodles Soup",
    paragraph: "Savory chicken noodle soup with tender meat and vegetables.",
    price: 180,
    category: "Soup",
    type:"Non-Veg"
  },
  
  {
    id: 13,
    image: image13,
    rating: 3.5,
    title: "Vegetable Pizza",
    paragraph: "Cheesy vegetable pizza topped with fresh veggies and herbs.",
    price: 180,
    category: "Pizza",
    type:"Veg",

  },
  
  {
    id: 14,
    image: image14,
    rating: 4.5,
    title: "Chicken Pizza",
    paragraph: "Juicy chicken pizza loaded with cheese and flavorful toppings.",
    price: 280,
    category: "Pizza",
    type:"Non-Veg",
  },
  
  {
    id: 15,
    image: image15,
    rating: 3.5,
    title: "Cheese Pizza",
    paragraph: "Classic cheese pizza with a golden crust, gooey mozzarella.",
    price: 180,
    category: "Pizza",
    type:"Veg",

  },
  {
    id: 16,
    image: image16,
    rating: 3.5,
    title: "Pepporoni Pizza",
    paragraph: "Pepperoni pizza topped with spicy, cheesy, golden crust.",
    price: 180,
    category: "Pizza",
    type:"Non-Veg",

  },
  {
    id: 17,
    image: image17,
    rating: 3.5,
    title: "Chicken Roll",
    paragraph: "Chicken roll with spiced chicken and sauces in a soft wrap.",
    price: 120,
    category: "Roll",
    type:"Non-Veg",

  },
  {
    id: 18,
    image: image18,
    rating: 3.5,
    title: "Vegetable Roll",
    paragraph: "Vegetable roll with mixed veggies and flavorful sauces.",
    price: 100,
    category: "Roll",
    type:"Veg",

  },
  {
    id: 19,
    image: image19,
    rating: 4.5,
    title: "Spring Roll",
    paragraph: "Crispy spring roll filled with seasoned vegetables.",
    price: 120,
    category: "Roll",
    type:"Veg",

  },
  {
    id: 20,
    image: image20,
    rating: 3.5,
    title: "Paneer Kathi Roll",
    paragraph: "Spiced paneer wrapped in a soft paratha roll.",
    price: 150,
    category: "Roll",
    type:"Veg",

  },
  {
    id: 21,
    image: image21,
    rating: 5,
    title: "Cookies Plate Dessert",
    paragraph: "Assorted cookies served on a dessert plate.",
    price: 250,
    category: "Dessert",
    type:"Veg",

  },
  {
    id: 22,
    image: image22,
    rating: 5,
    title: "Chocalate Icecream",
    paragraph: "Rich and creamy chocolate-flavored ice cream.",
    price: 150,
    category: "Dessert",
    type:"Veg",

  },
  {
    id: 23,
    image: image23,
    rating: 5,
    title: "Chocalate Cup",
    paragraph: "Mini dessert cups filled with rich chocolate delight.",
    price: 150,
    category: "Dessert",
    type:"Veg",

  },
  {
    id: 24,
    image: image24,
    rating: 5,
    title: "Plum Cake",
    paragraph: "Moist and flavorful cake packed with dried fruits and spices.",
    price: 250,
    category: "Dessert",
    type:"Veg",

  },
  
  // Add more items like Soup, Pizza, Roll, Dessert...
];



const renderRatingIcons = (rating) => {
  return Array.from({ length: 5 }, (_, i) => (
    <i key={i} className={`bi ${i < rating ? "bi-star-fill text-warning" : "bi-star"}`}></i>
  ));
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Menu");
  const [isVeg, setIsVeg] = useState(true); 
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("sort");
  const [priceFilter, setPriceFilter] = useState("all");
const [ratingFilter, setRatingFilter] = useState("all");



  // const filteredItems = menuItems.filter(item => {
  //   const categoryMatch = selectedCategory === "All Menu" || item.category === selectedCategory;
  //   const typeMatch = isVeg ? item.type === "Veg" : item.type === "Non-Veg";
  //   return categoryMatch && typeMatch;
  // });
  const filteredItems = menuItems.filter(item => {
    const categoryMatch = selectedCategory === "All Menu" || item.category === selectedCategory;
    const typeMatch = isVeg ? item.type === "Veg" : item.type === "Non-Veg";
  
    let priceMatch = true;
    if (priceFilter === "under100") priceMatch = item.price < 100;
    else if (priceFilter === "100to300") priceMatch = item.price >= 100 && item.price <= 300;
    else if (priceFilter === "above300") priceMatch = item.price > 300;
  
    let ratingMatch = true;
    if (ratingFilter === "3.5") ratingMatch = item.rating >= 3.5;
    else if (ratingFilter === "4.0") ratingMatch = item.rating >= 4.0;
  
    return categoryMatch && typeMatch && priceMatch && ratingMatch;
  });
  
  
    // true = Veg, false = Non-Veg

  return (
    <>
      <Header />
      <section className='menu_page'>
        <Container>
          <Nav className="justify-content-center mb-4" variant="pills" activeKey={selectedCategory}>
            {categories.map((cat, index) => (
              <Nav.Item key={index}>
                <Nav.Link eventKey={cat} onClick={() => setSelectedCategory(cat)}>
                  {cat}
                </Nav.Link>
              </Nav.Item>
            ))}
            <div className='menu-top-bar'>
            <div className="filter-button-container">
<button className="filter-btn" onClick={() => setShowFilterPopup(true)}>
  <i className="bi bi-funnel-fill me-2"></i> Filter
</button>

  </div>
            <div className="veg-toggle-container text-center mb-4">
  <label className="veg-toggle-switch-with-icon">
    <input
      type="checkbox"
      checked={isVeg}
      onChange={() => setIsVeg(!isVeg)}
    />
    <span className="slider-icon">
      <span className="icon">{isVeg ? "🥦" : "🍗"}</span>
    </span>
  </label>
</div>

</div>



          </Nav>

          <Row>
            {filteredItems.map(item => (
              <Cards
                key={item.id}
                id={item.id}
                image={item.image}
                rating={item.rating}
                title={item.title}
                paragraph={item.paragraph}
                price={item.price}
                renderRatingIcons={renderRatingIcons}
              />
            ))}
            {showFilterPopup && (
  <div className="filter-modal">
    <div className="filter-box">
      <div className="filter-header">
        <h5>Filters and sorting</h5>
        <button onClick={() => setShowFilterPopup(false)} className="close-x">✕</button>
      </div>
      <div className="filter-body">
        {/* Sidebar Tabs */}
        <div className="filter-tabs">
          <button onClick={() => setActiveTab("sort")} className={activeTab === "sort" ? "active" : ""}>
            <i className="bi bi-sort-down"></i> Sort By
          </button>
          <button onClick={() => setActiveTab("time")} className={activeTab === "time" ? "active" : ""}>
            <i className="bi bi-clock-history"></i> Time
          </button>
          <button onClick={() => setActiveTab("rating")} className={activeTab === "rating" ? "active" : ""}>
            <i className="bi bi-star-fill"></i> Rating
          </button>
          <button onClick={() => setActiveTab("offers")} className={activeTab === "offers" ? "active" : ""}>
            <i className="bi bi-percent"></i> Offers
          </button>
          <button onClick={() => setActiveTab("price")} className={activeTab === "price" ? "active" : ""}>
            ₹ Dish Price
          </button>
        </div>

        {/* Right Pane Content */}
        <div className="filter-content">
          {activeTab === "sort" && (
            <>
              <h6>Sort by</h6>
              <p className="option">Relevance</p>
              <p className="option">Price - Low to High</p>
              <p className="option">Price - High to Low</p>
            </>
          )}
          {activeTab === "time" && (
            <>
              <h6>Time</h6>
              <div className="option-box">Schedule</div>
              <div className="option-box">Quick</div>
              <div className="option-box">Under 30 mins</div>
            </>
          )}
          {activeTab === "rating" && (
            <>
              <h6>Restaurant Rating</h6>
              <div className="option-box" onClick={() => setRatingFilter("3.5")}>Rated 3.5+</div>
<div className="option-box" onClick={() => setRatingFilter("4.0")}>Rated 4.0+</div>

            </>
          )}
          {activeTab === "offers" && (
            <>
              <h6>Offers</h6>
              <div className="option-box">50% or more</div>
              <div className="option-box">Flat ₹100 OFF</div>
            </>
          )}
          {activeTab === "price" && (
            <>
              <h6>Dish Price</h6>
              <div className="option-box" onClick={() => setPriceFilter("under100")}>Under ₹100</div>
<div className="option-box" onClick={() => setPriceFilter("100to300")}>₹100 - ₹300</div>
<div className="option-box" onClick={() => setPriceFilter("above300")}>₹300 and above</div>

            </>
          )}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="filter-footer">
        <button onClick={() => setShowFilterPopup(false)} className="close-btn">Close</button>
        <button
  className="result-btn"
  onClick={() => {
    setShowFilterPopup(false); // ✅ Closes the filter popup
  }}
>
  Show Results
</button>

      </div>
    </div>
  </div>
)}


          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Menu;
