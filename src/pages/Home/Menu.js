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
  },
  {
    id: 2,
    image: image2,
    rating: 5,
    title: "Maisur Dosa",
    paragraph: "Crispy rice crepe with spicy potato filling, served with sambar.",
    price: 100,
    category: "South Indian",
  },
  {
    id: 3,
    image: image3,
    rating: 5,
    title: "Curd Rice",
    paragraph: "Comforting South Indian rice with curd and mild spices.",
    price: 80,
    category: "South Indian",
  },
  {
    id: 4,
    image: image4,
    rating: 5,
    title: "Meduvada Sambar",
    paragraph: "Crispy lentil fritters served with flavorful sambar.",
    price: 80,
    category: "South Indian",
  },
  {
    id: 5,
    image: image5,
    rating: 5,
    title: "Paneer Tikka",
    paragraph: "Grilled paneer cubes marinated in spicy yogurt mix.",
    price: 150,
    category: "Starter",
  }, {
    id: 6,
    image: image6,
    rating: 4,
    title: "Garlic Toast",
    paragraph: "Grilled paneer cubes marinated in spicy yogurt mix.",
    price: 180,
    category: "Starter",
  },
  {
    id: 7,
    image: image7,
    rating: 3.5,
    title: "Chiken Lollipop",
    paragraph: "Crispy fried chicken wings with spicy marinade.",
    price: 200,
    category: "Starter",
  },
  {
    id: 8,
    image: image8,
    rating: 4.5,
    title: "Potato Fries",
    paragraph: "Crispy golden potato fries, lightly salted.",
    price: 80,
    category: "Starter",
  },
  {
    id: 9,
    image: image9,
    rating: 3.5,
    title: "Mashroom Soup",
    paragraph: "Creamy mushroom soup with rich, earthy flavors.",
    price: 120,
    category: "Soup",
  },
  {
    id: 10,
    image: image10,
    rating: 4.5,
    title: "Tomato Soup",
    paragraph: "Tangy and flavorful tomato soup, rich and comforting.",
    price: 120,
    category: "Soup",
  },
  {
    id: 11,
    image: image11,
    rating: 4,
    title: "Vegetable Soup",
    paragraph: "Nutritious vegetable soup with mixed seasonal veggies.",
    price: 150,
    category: "Soup",
  },
  {
    id: 12,
    image: image12,
    rating: 3.5,
    title: "Chicken Noodles Soup",
    paragraph: "Savory chicken noodle soup with tender meat and vegetables.",
    price: 180,
    category: "Soup",
  },
  
  {
    id: 13,
    image: image13,
    rating: 3.5,
    title: "Vegetable Pizza",
    paragraph: "Cheesy vegetable pizza topped with fresh veggies and herbs.",
    price: 180,
    category: "Pizza",
  },
  
  {
    id: 14,
    image: image14,
    rating: 4.5,
    title: "Chicken Pizza",
    paragraph: "Juicy chicken pizza loaded with cheese and flavorful toppings.",
    price: 280,
    category: "Pizza",
  },
  
  {
    id: 15,
    image: image15,
    rating: 3.5,
    title: "Cheese Pizza",
    paragraph: "Classic cheese pizza with a golden crust, gooey mozzarella.",
    price: 180,
    category: "Pizza",
  },
  {
    id: 16,
    image: image16,
    rating: 3.5,
    title: "Pepporoni Pizza",
    paragraph: "Pepperoni pizza topped with spicy, cheesy, golden crust.",
    price: 180,
    category: "Pizza",
  },
  {
    id: 17,
    image: image17,
    rating: 3.5,
    title: "Chicken Roll",
    paragraph: "Chicken roll with spiced chicken and sauces in a soft wrap.",
    price: 120,
    category: "Roll",
  },
  {
    id: 18,
    image: image18,
    rating: 3.5,
    title: "Vegetable Roll",
    paragraph: "Vegetable roll with mixed veggies and flavorful sauces.",
    price: 100,
    category: "Roll",
  },
  {
    id: 19,
    image: image19,
    rating: 4.5,
    title: "Spring Roll",
    paragraph: "Crispy spring roll filled with seasoned vegetables.",
    price: 120,
    category: "Roll",
  },
  {
    id: 20,
    image: image20,
    rating: 3.5,
    title: "Paneer Kathi Roll",
    paragraph: "Spiced paneer wrapped in a soft paratha roll.",
    price: 150,
    category: "Roll",
  },
  {
    id: 21,
    image: image21,
    rating: 5,
    title: "Cookies Plate Dessert",
    paragraph: "Assorted cookies served on a dessert plate.",
    price: 250,
    category: "Dessert",
  },
  {
    id: 22,
    image: image22,
    rating: 5,
    title: "Chocalate Icecream",
    paragraph: "Rich and creamy chocolate-flavored ice cream.",
    price: 150,
    category: "Dessert",
  },
  {
    id: 23,
    image: image23,
    rating: 5,
    title: "Chocalate Cup",
    paragraph: "Mini dessert cups filled with rich chocolate delight.",
    price: 150,
    category: "Dessert",
  },
  {
    id: 24,
    image: image24,
    rating: 5,
    title: "Plum Cake",
    paragraph: "Moist and flavorful cake packed with dried fruits and spices.",
    price: 250,
    category: "Dessert",
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

  const filteredItems = selectedCategory === "All Menu"
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

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
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Menu;
