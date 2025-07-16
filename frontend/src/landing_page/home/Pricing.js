import React from "react";

function Pricing() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-4">
          <h2 className="mt-5 ">Unbeatable Pricing</h2>
          <p className="mt-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
           <a href="#"style={{textDecoration:"none"}}>See Pricing<i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col border p-5">&#x20B9;0
              <p className="mt-3">free equity delivery and direct mutual funds</p>
              </div>
             <div className="col border p-5">&#x20B9;20
              <p className="mt-3">Intraday and F&O</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
