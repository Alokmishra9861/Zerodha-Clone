import React from "react";

function LeftSection({
  imgUrl,
  productTitle,
  productDescription,
  tryDemo,
  learnMore,
  GooglePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-3">
        <div className="col-7 mb-5">
          <img src={imgUrl} />
        </div>

        <div className="col-5 p-5">
          <h1>{productTitle}</h1>
          <p style={{lineHeight:"1.8"}}>{productDescription}</p>
          <div className="mt-3">
            <a href={tryDemo} >try demo→</a>
            <a href={learnMore} style={{marginLeft:"50px"}}>learn More→</a>
          </div>
          <div className="mt-3">
            <a href={GooglePlay}>
              <img src="media/images/googlePlayBadge.svg"style={{marginRight:"20px"}}></img>
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
