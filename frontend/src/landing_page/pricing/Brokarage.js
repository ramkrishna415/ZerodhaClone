import React from 'react';
function Brokarage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8 p-4 '>
                    <a href='a' style={{textDecoration:"none"}}><h3 className='fs-5'>Brokarage calculator</h3></a>
                    <ul style={{textAlign:"left",lineHeight:"2.4rem"}} className=' text-muted'>
                        <li>Call & trade Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
                    <li>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</li>
                   <li>NRI brokerage charges ₹100 per order for futures and options.</li>
                   <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                   <li>GST Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</li>
                    <li>Pledging charges ₹30 + GST per pledge request per ISIN.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                   <a href='a' style={{textDecoration:"none"}}> <h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
     );
}

export default Brokarage;