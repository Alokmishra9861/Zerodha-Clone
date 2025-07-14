import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return (
         <div className="container p-5">
      <div className="row text-center">
            <h1 className="mt-5 fs-2">Open a Zerodha Account</h1>
            <p className='mt-3 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link to="/signup">
            <button className="p-2 mt-4 fs-5 mb-5 btn btn-primary" style={{width:"15%", margin:"0 auto"}}>Signup for free</button>
            </Link>
      </div>    
    </div>
    );
}

export default OpenAccount;