import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row  mt-5 mb-5">
        <h2 className="fs-5 text-muted" style={{fontWeight:"400"}}>
          To create a ticket, select a relevant topic
        </h2>
        <div className="col-4 mt-2">
          <h4 className="mt-5 fs-5" style={{fontWeight:"400"}}>
            <i
              class="fa-solid fa-circle-plus"
              style={{ marginRight: "10px" }}
            ></i>
            Account Opening
          </h4>
          <a href="" style={{textDecoration:"none",lineHeight:"2rem"}} className="mb-5">Resident individual</a><br />
          <a href="" style={{textDecoration:"none",lineHeight:"2rem"}}>Minor</a><br />
          <a href="" style={{textDecoration:"none",lineHeight:"2rem"}}>Non Resident Indian (NRI)</a><br />
          <a href="" style={{textDecoration:"none",lineHeight:"2rem"}}>Company, Partnership, HUF and LLP</a><br />
          <a href="" style={{textDecoration:"none",lineHeight:"2rem"}}>Glossary</a>
        </div>
        <div className="col-4 mt-2">
          <h4 className="mt-5 fs-5" style={{fontWeight:"400"}}>
            <i class="fa-solid fa-user" style={{ marginRight: "10px" }}></i>Your
            Zerodha Account
          </h4>
          <a href="" style={{textDecoration:"none",lineHeight:"2rem",lineHeight:"2rem"}}>Your Profile</a><br />
          <a href="" style={{textDecoration:"none",lineHeight:"2rem"}} className="mb-5">Account modification</a><br />
          <a href="" style={{textDecoration:"none",lineHeight:"2rem"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br />
          <a href="" style={{textDecoration:"none",lineHeight:"2rem"}}>Nomination</a><br />
          <a href="" style={{textDecoration:"none",lineHeight:"2rem"}}>Transfer and conversion of securities</a>
        </div>
        <div className="col-4  mt-2">
          <h4 className="mt-5 fs-5" style={{fontWeight:"400"}}>
            <i class="fa-solid fa-chart-simple"style={{ marginRight: "10px" }}></i> Kite
            </h4>  
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>IPO</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}} className="mb-5">Trading FAQs</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>Margin Trading Facility (MTF) and Margins</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>Charts and orders</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>Alerts and Nudges</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>General</a>
        </div>
        <div className="col-4  mt-5">
          <h4 className="fs-5" style={{fontWeight:"400"}}>
            <i class="fa-solid fa-chart-simple"style={{ marginRight: "10px"}}></i> Funds
            </h4>  
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>Add money</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}} >Withdraw money</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>Add bank accounts</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>eMandates</a><br />
        </div>
        <div className="col-4 mt-5">
          <h4 className=" fs-5" style={{fontWeight:"400"}}>
            <i class="fa-solid fa-chart-simple"style={{ marginRight: "10px" }}></i> Console
            </h4>  
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>Portfolio</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}} className="mb-5">Corporate actions</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>Funds statement</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>Reports</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>Profile</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>Segments   
            </a>
        </div>
        <div className="col-4  mt-5">
          <h4 className="fs-5" style={{fontWeight:"400"}}>
            <i class="fa-solid fa-chart-simple"style={{ marginRight: "10px" }}></i> Coin
            </h4>  
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>Mutual funds</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}} className="mb-5">National Pension Scheme (NPS)</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>Features on Coin</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>Payments and Orders</a><br />
            <a href="#" style={{textDecoration:"none",lineHeight:"2rem"}}>General</a><br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
