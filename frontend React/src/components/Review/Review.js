import React, { useEffect, useState } from 'react';
import { deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import allProducts from '../../fakeData/products.json';
import Product from '../Product/Product';


const Review = () => {

   const [orderdItems, setorderdItems] = useState([]);

   
   const removeItem = (key) => {

      let currentProduct = orderdItems.find(pd => pd.key === key);
      const quantityRemover = () => {
         currentProduct.quantity = currentProduct.quantity - 1;
         const withOutCurrentArray = orderdItems.filter(pd => pd.key !== key);

         const updateTheCart = [currentProduct, ...withOutCurrentArray,];
         setorderdItems(updateTheCart);
         deleteFromDb(key)

      }
      const removeForever = () => {
         const UpdatedCart = orderdItems.filter(pd => pd.key !== key);
         setorderdItems(UpdatedCart);
         deleteFromDb(key)
      } 


      currentProduct.quantity > 1 ? quantityRemover(quantityRemover) : removeForever(currentProduct);

   }
   
    useEffect(()=>{

       const myCarts = getStoredCart();
       const items = Object.keys(myCarts);


         const CartItems = items.map(key => {
            const SingleProduct = allProducts.find(pd => pd.key === key);
            SingleProduct.quantity = myCarts[key];
            return  SingleProduct;
       })

         setorderdItems(CartItems);
  
     
    },[])


    return (
        <div>
             
            { 

            orderdItems.map(pd => <Product product={pd}
                quantity={true}
                key={pd.key}
                removeItem={removeItem}
                ></Product>)
               

            }
         

        </div>
    );
};

export default Review; 