import React from "react";
import Hero from "../products/Hero";
import LeftSection from "../products/LeftSection";
import RightSection from "../products/RightSection";
import Universe from "../products/Universe";

function ProductsPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imgUrl="/Media/images/kite.png"
        productTitle="kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        GooglePlay=""
        appStore=""
      />
       <RightSection 
       imgUrl="/Media\images\console.png"
        productTitle="Console"
         productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        />
      <LeftSection
        imgUrl="/Media/images/coin.png"
        productTitle="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        GooglePlay=""
        appStore=""
      />
       <RightSection
        imgUrl="/Media\images\kiteconnect.png"
        productTitle="Kite Connect API"
         productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""/> 
      <LeftSection
        imgUrl="/Media/images/varsity.png"
        productTitle="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        GooglePlay=""
        appStore=""
      />
      <Universe />
    </div>
  );
}

export default ProductsPage;
