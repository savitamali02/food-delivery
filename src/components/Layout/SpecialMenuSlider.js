import React,{useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../../styles/swiper.css";

import { CartContext } from "../../pages/Home/CartContext"; // adjust the path if needed


import image1 from "../../assets/shop/image-1.jpg";
import image2 from "../../assets/shop/imge-5.jpg";
import image3 from "../../assets/shop/image-21.jpg";
import image4 from "../../assets/shop/image-19.jpeg";

const SpecialMenuSlider = () => {
  const specialItems = [
    {
      id: 1,
      title: "Idali Sambar",
      description: "Soft rice cakes with spicy, tangy lentil curry.",
      price: 80,
      image: image1,
    },
    {
      id: 2,
      title: "Paneer Tikka",
      description: "Grilled paneer with smoky flavors & spices.",
      price: 120,
      image: image2,
    },
    {
      id: 3,
      title: "Cookies Dessert",
      description: "Assorted cookies on a dessert plate.",
      price: 250,
      image: image3,
    },
    {
      id: 4,
      title: "Spring Roll",
      description: "Crispy rolls filled with veggies.",
      price: 70,
      image: image4,
    },
  ];
  const { addToCart } = useContext(CartContext);

  return (
    <section className="special-slider-section pb-5 pt-0">
      <div className="container">
        <h2 className="text-center mb-5 ">🍽️ Our Special Menu</h2>
        <Swiper
  slidesPerView={3}
  spaceBetween={30}
  loop={true}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  }}
  modules={[Autoplay]}
  className="mySwiper"
>

{specialItems.map((item) => (
  <SwiperSlide key={item.id}>
    <div className="special-slide-card" onClick={() => addToCart(item)}>
      <img src={item.image} alt={item.title} style={{ cursor: "pointer" }} />
    </div>
  </SwiperSlide>
))}

        </Swiper>
      </div>
    </section>
  );
};

export default SpecialMenuSlider;
