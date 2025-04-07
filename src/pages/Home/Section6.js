import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";

function Section6() {
  return (
    <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User1} className="img-fluid" alt="user-1" />
                </div>
                <p>
                This site hits the spot — clean layout, tempting images, and I found my favorite double patty burger in seconds. The navigation feels smooth, especially on desktop. I’d just suggest adding a loyalty program or discount popup for returning customers. I’m definitely coming back!.
                </p>
                <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY PETER</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User2} className="img-fluid" alt="user-1" />
                </div>
                <p>
                The visuals are juicy! Burgers look so good I almost bit my screen. The homepage loaded fast, and I liked how easy it was to scroll through the signature burgers. Maybe add a ‘build your own burger’ option for extra fun?
                </p>
                <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE JORDAN</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User3} className="img-fluid" alt="user-1" />
                </div>
                <p>
                The site’s layout is family-friendly and clear. I appreciated the filter for ‘kid-friendly’ meals. Just one suggestion: when I click a burger, I’d love a quick pop-up or preview instead of going to a whole new page.
                </p>
                <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY SAMMY </h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User4} className="img-fluid" alt="user-1" />
                </div>
                <p>
                Finally a burger site that doesn't lag on mobile! The ‘Add to Cart’ works well and the cart icon updates immediately — super slick. My only wish? Add a dark mode. Ordering at 1am shouldn’t blind me 😅.
                </p>
                <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY JANNY</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;
