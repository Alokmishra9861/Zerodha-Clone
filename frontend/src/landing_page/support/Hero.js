import React from 'react';

function Hero() {
    return ( 
          <section className="container-fluid" id='supportHero'>
      <div className="p-3" id='supportWrapper'>
        <h5 className='mt-4'>Support Portal</h5>
        <a href='#'className='mt-4'>Track Tickets</a>
      </div>#
      <div className='row mr-5 mx-5 mb-5 p-5'>
        <div className='col-6 '>
            <h2 className='fs-4 mt-2' style={{fontWeight:"400"}}>Search for an answer or browse help topics to create a ticket</h2>
            <input placeholder='Eg:how do i activate F&O, why is my order getting rejected...'/>
            <br />
            <a href='#' style={{marginRight:"10px"}}>Track account opening</a> 
            <a href='#' style={{marginRight:"10px"}}>Track segment activation</a>
            <a href='#' style={{marginRight:"10px"}}>Intraday margins</a><br />
            <a href='#' style={{marginRight:"10px"}} className='mb-5'>Kite user manual</a>
        </div>
        <div className='col-6 my-4 mb-5'>
            <h2 className='fs-4' style={{fontWeight:"500"}}>Featured</h2>
            <ol className='mb-5'>
               <li className='mb-3'>
                    <a href='#'>Exclusion of F&O contracts on 8 securities from <br />August 29, 2025</a> 
                </li>
                <li>
                      <a href='#'>Revision in expiry day of Index and Stock <br /> derivatives contracts</a>
                </li>
            </ol>
        </div>
      </div>
    </section>
     );
}

export default Hero;