import React from "react";

function RightSection({ imgUrl, productTitle, productDescription, learnMore }) {
  return (
    <div className="container ">
      <div className="row p-5">
        <div className="col-6 mt-5 p-5">
          <h2 className="mt-5 p-2">{productTitle}</h2>
          <p className="p-2">{productDescription}</p>
          <a href={learnMore} className="p-2">learnMore</a>
        </div>
        <div className="col-6 mb-5">
            <img src={imgUrl} alt="console_img" style={{width:"110%"}}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
