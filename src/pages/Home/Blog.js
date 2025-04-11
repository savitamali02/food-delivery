import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles/TestimonialCarousel.css'; // Optional custom CSS
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

const Blog = () => {
  const testimonials = [
    {
      img: "https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
      description: "I ordered from a local vendor through this app, and the food arrived hot and fresh within 30 minutes. The real-time tracking made the whole experience stress-free. Absolutely love it!",
      name: "Jessica",
      role: "Architect"
    },
    {
      img: "https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
      description: "Not only am I saving money on delicious meals, but I'm also contributing to reducing food waste. It feels good to be a part of something meaningful while enjoying my favorite dishes.",
      name: "Pearl",
      role: "Engineer"
    },
    {
      img: "https://images.pexels.com/photos/531139/pexels-photo-531139.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
      description: "This platform has completely changed the way I order food. Not only do I get delicious meals, but I also help reduce food waste. The app is super easy to use and delivery is always on time. ",
      name: "Kellie",
      role: "Graphic Designer"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
    <Header/>
    <div className="testimonial-wrapper">
  <div className="container mt-0">
    <Slider {...settings}>
      {testimonials.map((item, index) => (
        <div key={index} className="p-3">
          <div className="testimonial shadow p-4 rounded">
            <div className="pic mb-3">
              <img src={item.img} alt={item.name} className="rounded-circle" />
            </div>
            <p className="description">{item.description}</p>
            <h3 className="title">{item.name}</h3>
            <small className="post">- {item.role}</small>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>


    <Footer/>
    </>
  );
  
};

export default Blog;
