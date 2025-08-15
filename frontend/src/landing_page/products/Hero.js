import React from 'react';
function Hero() {
    return ( 
        <div className='container p-3 mt-5 border-bottom'>
            <div className='row text-center mt-5'>
             <h1>Zerodha Products</h1> 
             <h4 className='text-muted mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</h4>  
            <p className='text-muted mt-3 '>Check out our <a href='jh' style={{textDecoration:'none'}}>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;