import React from 'react';

function Hero() {
    return ( 
     <div className="container mt-5 mb-5">
      <div className="row text-center mt-3 mb-5">
        <h1>Charges</h1>
        <h2 className="mb-5 fs-4 text-muted">
          List of all charges and taxes
        </h2>

        <div className="col-4 mt-5 mb-5">
          <img
            src="/Media/images/pricingEquity.svg"
            alt="fund house"
            style={{width:"60%"}}
            className='mt-5'
          />
          <h2>Free equity delivery</h2>
          <p
            className="mt-3 text-muted"
            style={{ fontSize: "15px", lineHeight: "18px" }}
          >
           All equity delivery investments (NSE, BSE), <br /> are absolutely free — ₹ 0 brokerage
          </p>
        </div>
        <div className="col-4 mb-5 mt-5 ">
          <img
            src="/Media/images/other-trades.svg"
            alt="fund house"
            style={{width:"60%"}}
             className='mt-5'
          />
           <h2>Intraday and F&O trades</h2>
          <p
            className="mt-3 text-muted "
            style={{ fontSize: "15px", lineHeight: "18px" }}
          >
           Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades
          </p>
        </div>
        <div className="col-4 mt-5 mb-5">
          <img
            src="/Media/images/pricingEquity.svg"
            alt="fund house"
            style={{width:"60%"}}
             className='mt-5'
          />
           <h2>Free direct MF</h2>
          <p
            className="mt-3 text-muted"
            style={{ fontSize: "15px", lineHeight: "18px" }}
          >
           All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
     );
}

export default Hero;