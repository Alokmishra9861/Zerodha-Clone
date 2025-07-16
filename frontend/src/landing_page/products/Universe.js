import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <h2 className="text-center fs-5 p-5 text-muted">Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.</h2>
      <div className="row text-center mt-5">
        <h1>The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 mt-5">
          <img
            src="/Media\images\zerodhaFundhouse.png"
            alt="fund house image"
            style={{ width: "50%" }}
          />
          <p
            className="mt-3 text-muted"
            style={{ fontSize: "12px", lineHeight: "18px" }}
          >
            Our asset management venture <br />
            that is creating simple and transparent index <br /> funds to help
            you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="/Media\images\sensibullLogo.svg"
            alt="fund house image"
            style={{ width: "50%" }}
          />
          <p
            className="mt-3 text-muted "
            style={{ fontSize: "12px", lineHeight: "18px" }}
          >
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br /> data points
            like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 mt-5 mb-5 ">
          <img
            src="/Media\images\tijori.svg"
            alt="fund house image"
            style={{ width: "40%" }}
          />
          <p
            className="mt-3 text-muted"
            style={{ fontSize: "12px", lineHeight: "18px" }}
          >
            Investment research platform <br /> that offers detailed insights on
            stocks <br />, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="/Media\images\StreakLogo.png"
            alt="fund house image"
            style={{ width: "50%" }}
          />
          <p
            className="mt-3 text-muted"
            style={{ fontSize: "12px", lineHeight: "18px" }}
          >
            Our asset management venture <br />
            that is creating simple and transparent index <br /> funds to help
            you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="/Media\images\smallcaseLogo.png"
            alt="fund house image"
            style={{ width: "50%" }}
          />
          <p
            className="mt-3 text-muted "
            style={{ fontSize: "12px", lineHeight: "18px" }}
          >
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br /> data points
            like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="/Media\images\dittoLogo.png"
            alt="fund house image"
            style={{ width: "40%" }}
          />
          <p
            className="mt-3 text-muted"
            style={{ fontSize: "12px", lineHeight: "18px" }}
          >
            Investment research platform <br /> that offers detailed insights on
            stocks <br />, sectors, supply chains, and more.
          </p>
        </div>
        <button
          className="p-2 mt-4 fs-5 mb-5 btn btn-primary"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
