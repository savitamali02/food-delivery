
import React from 'react';
import '../../styles/Chefs.css';

const Chefs = () => {
  const chefsData = [
    {
      img: "https://i.postimg.cc/SNC0VXWv/chef1.png",
      name: "John Watson",
      bio: "With a passion for Asian cuisine, John participated in the last International Chinese Culinary Competition that started in Vancouver. He loves to bring to your customers diverse international dishes"
    },
    {
      img: "https://i.postimg.cc/zf9Sdfwx/chef2.png",
      name: "Alexa Gomez",
      bio: "With a desire for competition, Alexa participated in many chef competitions, including the MasterChef España. In these competitions, he honed his skills and creativity in the kitchen"
    },
    {
      img: "https://i.postimg.cc/Xv3n9fmL/chef3.jpg",
      name: "Richard Walker",
      bio: "With in-depth culinary knowledge of 20 years in the area, throughout his career, Richard has taken on roles as a mentor and teacher. His spirit has a passion for teaching and excellence in the culinary field"
    }
  ];

  return (
    <section className="chefs" id="chefs">
      <div className="heading">
        {/* <p>Our Chefs</p> */}
        <h2>Our Awesome Chefs'</h2>
      </div>

      <div className="chefs-container">
        {chefsData.map((chef, index) => (
          <div className="chef-box" key={index}>
            <img src={chef.img} alt="chef" />
            <div className="text">
              <h2>{chef.name}</h2>
              <p>{chef.bio}</p>
              {/* <a href="#/" className="btn1">Hire Now</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chefs;