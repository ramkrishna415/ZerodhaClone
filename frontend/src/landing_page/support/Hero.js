import React from 'react';
function Hero() {
    return ( 
      <div className='container-fluid' id="supportHero">
        <div className=' p-5 mt-5 mb-3 ' id='supportWrapper'>
            <h4>Support portal</h4>
            <a href="">Track Tickets</a>
     </div>
     <div className='row p-3' id='supportWrapper'>
          <div className='col-6 p-5 '>
            <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder='Eg: how do i activate F&O, why is my order getting rejected...'/>
          <br/>
         <a href='' style={{marginRight:"20px"}}>Track account opening</a>
         <a href=''  style={{marginRight:"20px"}}>Track segment activation</a>
         <a href=''  style={{marginRight:"20px"}}>Intraday margins</a>    
          <a href=''  style={{marginRight:"20px"}}>Kite user manual </a>     
     </div>
           <div className='col-6 p-5 '>
            <h1 className='fs-4' >Featured</h1>
            <ol>
                <li> <a href=''>Quarterly Settlement of Funds - July 2025
 </a></li>
                <li><a href=''>Exclusion of F&O contracts on 8 securities from August 29, 2025
 </a></li>
            </ol>
           
 
            </div> 
           
     </div>
      </div>
     );
}

export default Hero;