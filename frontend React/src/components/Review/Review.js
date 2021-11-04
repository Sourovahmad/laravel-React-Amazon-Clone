import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';

const Review = () => {

    const [orderdItems, setorderdItems] = useState([]);

    useEffect(()=>{
       const myCarts = getStoredCart();
       const items = Object.keys(myCarts);


    const prod   items.map(key => {

       })
  
     
    },[])


    return (
        <div>
           {orderdItems}
        </div>
    );
};

export default Review; 