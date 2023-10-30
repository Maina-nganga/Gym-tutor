import "./Plans.css";
import React from "react";
import { plansData } from "../Data/plansData";
import logo from "../Assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className=" blur blur-1"></div>
      <div className=" blur blur-2"></div>
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      <div className="plans">
        {plansData.map((Plan, i) => (
          <div className="plan" key={i}>
            {Plan.icon}
            <span>{Plan.name}</span>
            <span> $ {Plan.price}</span>

            <div className="features">
              {Plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={logo} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits -></span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
