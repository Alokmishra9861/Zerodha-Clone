import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <h4 className="text-center">
          <a href="#" style={{ textDecoration: "none" }}>
            Calculate your costs upfront
          </a>
          using our brokerage calculator
        </h4>

        <div className="col-6 p-5">
          <h4>Charges explained</h4>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            Securities/Commodities transaction tax
          </h5>
          <p style={{ fontSize: "12px" }} className="text-muted">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O. <br />
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>

          <h5 className="mt-5 mb-4 text-muted" style={{ fontSize: "15px" }}>
            Transaction/Turnover Charges
          </h5>
          <div style={{ fontSize: "12px" }} className="text-muted">
            <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
            <p>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p>
              BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.
            </p>
            <p>
              BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T)
              at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.
            </p>
            <p>
              BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
            </p>
          </div>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            Call & trade
          </h5>
          <p style={{ fontSize: "12px" }} className="text-muted">
            Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
          </p>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            Stamp charges
          </h5>
          <p style={{ fontSize: "12px" }} className="text-muted">
            Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            NRI brokerage charges
          </h5>
          <div style={{ fontSize: "12px" }} className="text-muted">
            <ul>
              <li>₹100 per order for futures and options.</li>
              <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
              <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower)</li>
              <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
            </ul>
          </div>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            Account with debit balance
          </h5>
          <p style={{ fontSize: "12px" }} className="text-muted">
            If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
          </p>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            Charges for Investor's Protection Fund Trust (IPFT) by NSE
          </h5>
          <div style={{ fontSize: "12px" }} className="text-muted">
            <ul>
              <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
              <li>Options - ₹50 per crore + GST traded value (premium value).</li>
              <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
            </ul>
          </div>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            Margin Trading Facility (MTF)
          </h5>
          <div style={{ fontSize: "12px" }} className="text-muted">
            <ul>
              <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
              <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
              <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN</li>
            </ul>
          </div>
        </div>

        <div className="col-6 mt-4 p-5">
          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            GST
          </h5>
          <p style={{ fontSize: "12px" }} className="text-muted">
            Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges)
          </p>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            SEBI Charges
          </h5>
          <p style={{ fontSize: "12px" }} className="text-muted">
            Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
          </p>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            DP (Depository participant) charges
          </h5>
          <div style={{ fontSize: "12px" }} className="text-muted">
            <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
            <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
            <p>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
          </div>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            Pledging charges
          </h5>
          <p style={{ fontSize: "12px" }} className="text-muted">
            ₹30 + GST per pledge request per ISIN.
          </p>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            AMC (Account maintenance charges)
          </h5>
          <p style={{ fontSize: "12px" }} className="text-muted">
            For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here. For non-BSDA demat accounts:
            ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here.
          </p>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            Corporate action order charges
          </h5>
          <p style={{ fontSize: "12px" }} className="text-muted">
            ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.
          </p>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            Off-market transfer charges
          </h5>
          <p style={{ fontSize: "12px" }} className="text-muted">
            ₹25 per transaction.
          </p>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            Physical CMR request
          </h5>
          <p style={{ fontSize: "12px" }} className="text-muted">
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.
          </p>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            Payment gateway charges
          </h5>
          <p style={{ fontSize: "12px" }} className="text-muted">
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            Delayed Payment Charges
          </h5>
          <p style={{ fontSize: "12px" }} className="text-muted">
            Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.
          </p>

          <h5 className="mt-5 text-muted" style={{ fontSize: "15px" }}>
            Trading using 3-in-1 account with block functionality
          </h5>
          <div style={{ fontSize: "12px" }} className="text-muted">
            <ul>
              <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
              <li>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>
          </div>
        </div>

        <div className="p-5 mb-5">
          <h5 className="text-muted" style={{ fontSize: "14px" }}>Disclaimer</h5>
          <p className="text-muted" style={{ fontSize: "12px" }}>
            For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
          </p>
        </div>

        <div className="p-5">
          <h2 className="fs-4 mb-5">Charges for account opening</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" style={{ fontSize: "12px" }} className="text-muted">Types of Account</th>
                <th scope="col">charges</th>
              </tr>
            </thead>
            <tbody className="table">
              <tr>
                <th scope="row" style={{ fontSize: "12px" }} className="text-muted">Online account</th>
                <td>Free</td>
              </tr>
              <tr>
                <th scope="row" style={{ fontSize: "12px" }} className="text-muted">Offline account</th>
                <td>Free</td>
              </tr>
              <tr>
                <th scope="row" style={{ fontSize: "12px" }} className="text-muted">NRI account (offline only)</th>
                <td>₹ 500</td>
              </tr>
              <tr>
                <th scope="row" style={{ fontSize: "12px" }} className="text-muted">Partnership, LLP, HUF, or Corporate accounts (offline only)</th>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-5">
          <h2 className="fs-4 mb-5">Charges for optional value added services</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" style={{ fontSize: "12px" }} className="text-muted">Service</th>
                <th scope="col">Billing Frequency</th>
                <th scope="col">Charges</th>
              </tr>
            </thead>
            <tbody className="table">
              <tr>
                <th scope="row" style={{ fontSize: "12px" }} className="text-muted">Tickertape</th>
                <td>FreeMonthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <th scope="row" style={{ fontSize: "12px" }} className="text-muted">Smallcase</th>
                <td>Per transaction</td>
                <td>Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <th scope="row" style={{ fontSize: "12px" }} className="text-muted">Kite Connect</th>
                <td>Monthly</td>
                <td>Connect: 500 | Historical: 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
