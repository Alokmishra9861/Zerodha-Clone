import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mb-5">
          <img src="/media/images/largestBroker.svg" alt="broker_img" />
        </div>
        <div className="col-6 mt-3">
          <h1>Largest stock broker in India</h1>
          <p>
            2+million Zerodha clients contribute to over 15% of retail order
            volumes in India daily by trading and investing in :
          </p>
          <div className="row">
            <div className="col-6">
              <ul className="mt-5">
                <li>Futures and options</li>
                <br />
                <li>Commodity derivatives</li>
                <br />
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6 mt-5">
                <ul>
                    <li>Stocks & IPOs</li>
                    <br />
                    <li>Direct mutual funds</li>
                    <br />
                    <li>Bonds and Govt.securities </li>
                </ul>
            </div>
          </div>
          <img src="/Media/images/pressLogos.png" alt="Press_img" style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
