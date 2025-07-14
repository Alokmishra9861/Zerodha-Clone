import React from "react";
import {Link} from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
            <img src='/Media/images/homeHero.png' alt="Hero_Image" />
            <h1 className="mt-5">Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more</p>
            <Link to="/signup">
                   <button className="p-2 mt-4 fs-5 mb-5 btn btn-primary" style={{width:"15%", margin:"0 auto"}}>Signup for free</button>
            </Link>   
      </div>
    </div>
  );
}

export default Hero;
