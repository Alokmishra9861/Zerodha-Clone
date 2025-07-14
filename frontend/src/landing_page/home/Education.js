import React from 'react';

function Education() {
    return (
        <div className='row mt-5 p-5'>
            <div className='col-6 p-5'>
                <img src='media/images/education.svg' alt='education_img' />
            </div>
            <div className='col-6 p-5'>
                <h2 className='mt-5'>Free and open market education</h2>
                <p className='mt-3 text-muted'>Varsity, the largest online stock market education book in the world <br></br>covering everything from the basics to advanced trading.</p>
                <a href=""style={{textDecoration:"none"}}>Varsity<i class="fa-solid fa-arrow-right"></i></a>
                <p className='mt-3 text-muted'>
                    TradingQ&A, the most active trading and investment community in<br></br>India for all your market related queries.
                </p>
                <a href=""  style={{textDecoration:"none"}}>TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
     );
}

export default Education;