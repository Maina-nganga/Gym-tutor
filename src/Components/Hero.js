import "./Hero.css";
import React from "react";
import Header from "../Components/Header";
import hero_image from "../Assets/hero_image.png";
import hero_image_black from "../Assets/hero_image_back.png";
import heart from "../Assets/heart.png";
import Calories from "../Assets/calories.png";
import {motion} from  "framer-motion"

const Hero = () => {
  const transition ={type: "spring",duration:3}
  return (

    <div className="hero">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
             <motion.div
             initial ={{left:"238px"}}
             whileInView ={{left:"8px"}}
             transition ={{transition, type:"tween"}}
             ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND
              LIVE UP YOUR LIFE TO FULLEST
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span> Fitness Programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn"> Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div 
          initial ={{right: "-1rem"}}
          whileInView={{right:"4rem"}}
          transition={transition}
         className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span> 116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_black} alt="" className="hero-image-black" />

        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned </span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
