import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import menu from "./Menu.jsx";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Laxwani Restaurant – A Culinary Experience Like No Other

            At Laxwani Restaurant, we believe that dining is more than just a meal; it's an experience. Nestled in the heart of Ahmedabad, our restaurant is a haven for food lovers,  Our story began with a passion for great food and a desire to create a warm, welcoming space where people can come together to enjoy the finest dishes.
            </p>
            <Link to={"/menu"}>
              Explore Menu 
              {/*it is a content written inside link */}
              <span>
                <HiOutlineArrowRight />
                {/*it is a icon*/}
              </span>
            </Link>
          </div>
          {/*making different div tag for alg-alg contents */}
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
