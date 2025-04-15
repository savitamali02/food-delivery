import React, { useEffect, useContext } from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Chef from '../../components/Layout/Chef';
import "../../styles/About.css";
import image1 from '../../assets/shop/image-1.jpg';
import image2 from '../../assets/shop/imge-5.jpg';
import image3 from '../../assets/shop/image-21.jpg';
import { CartContext } from '../Home/CartContext';
import SpecialMenuSlider from '../../components/Layout/SpecialMenuSlider';

const About = () => {
  const { addToCart, wishlistItems, toggleWishlist } = useContext(CartContext);

  useEffect(() => {
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + 90000);

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const countdownElement = document.getElementById("countdown-timer");
      if (countdownElement) {
        countdownElement.innerHTML = `
          <span class="badge bg-warning text-dark me-2">${days}d</span>
          <span class="badge bg-warning text-dark me-2">${hours}h</span>
          <span class="badge bg-warning text-dark me-2">${minutes}m</span>
          <span class="badge bg-warning text-dark me-2">${seconds}s</span>
        `;
      }

      if (distance < 0) {
        clearInterval(countdown);
        if (countdownElement) {
          countdownElement.innerHTML = `<span class="badge bg-dark text-white">EXPIRED</span>`;
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const specials = [
    {
      id: 201,
      image: image1,
      rating: 4,
      title: "Masala Dosa",
      paragraph: "Spicy stuffed dosa served with chutney & sambar",
      price: 80,
    },
    {
      id: 202,
      image: image2,
      rating: 5,
      title: "Paneer Tikka",
      paragraph: "Grilled paneer with smoky flavors & spices",
      price: 120,
    },
    {
      id: 203,
      image: image3,
      rating: 5,
      title: "Cookies Plate Dessert",
      paragraph: "Assorted cookies served on a dessert plate.",
      price: 250,
    }
  ];

  const renderRatingIcons = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="bi bi-star-fill text-warning me-1"></i>);
    }
    return stars;
  };

  return (
    <>
      <Header />

      <div className='about'>
        <div className="container my-5">
          <div className="text-center mb-4">
            <h2>About Our Platform</h2>
            <p className="mb-3 px-md-5">
              Our food delivery platform is built with a mission to reduce food waste and promote sustainable living. By partnering with local vendors, restaurants, and food suppliers, we ensure that excess food is efficiently redistributed to customers at affordable rates. We not only serve tasty meals but also contribute to a cause that makes a real difference in our community and environment.
            </p>
            <p className="px-md-5">
              With features like real-time tracking, QR code payment options, and a user-friendly interface, our platform makes ordering food simple, secure, and socially responsible. Whether you're craving a quick bite or want to make a conscious choice for a better tomorrow, our app bridges convenience and sustainability seamlessly.
            </p>
            <p className="mb-3 px-md-5">
              Our delivery process ensures that food quality and hygiene are never compromised. We work with FSSAI-licensed vendors and maintain a strict protocol for packaging, temperature control, and timely delivery. Users can enjoy their favorite meals at a fraction of the cost while being part of a socially impactful initiative. Our QR-based payment options, cart system, and multi-platform access make the experience seamless and convenient.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Today's Special Section */}
      <div className="todays-special-wrapper">
        <div className="todays-special-section menu_page container mb-0">
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-4 mb-4 px-md-6 px-5 gap-5">
            <h3 className="special-heading mb-0">🍽️ Today’s Special</h3>
            <div className="d-flex align-items-center gap-2">
              <h5 className="mb-0">⏳ Ends in:</h5>
              <div id="countdown-timer" className="countdown-timer mb-0"></div>
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            {specials.map(item => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card h-100 shadow-sm">
                  <div className="overflow-hidden">
                    <img src={item.image} alt={item.title} className="card-img-top" />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div>{renderRatingIcons(item.rating)}</div>
                      <div
                        className="wishlist"
                        onClick={() => toggleWishlist(item)}
                        style={{ cursor: 'pointer' }}
                      >
                        <i className={`bi ${wishlistItems.some(w => w.id === item.id) ? 'bi-heart-fill text-danger' : 'bi-heart'}`}></i>
                      </div>
                    </div>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.paragraph}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <h5 className="mb-0 price">₹{item.price}</h5>
                      <div className="add_to_card">
                        <button onClick={() => addToCart(item)}>
                          <i className="bi bi-bag me-2"></i> Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SpecialMenuSlider />
      <Chef />
      <Footer />
    </>
  );
};

export default About;