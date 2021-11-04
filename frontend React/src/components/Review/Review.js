import React, { useEffect, useState } from 'react';
import { deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import allProducts from '../../fakeData/products.json';
import Product from '../Product/Product';
import './Review.css';
import OrderTotal from './OrderTotal/OrderTotal';



const Review = () => {

   const [orderdItems, setorderdItems] = useState([]);

   
   const removeItem = (key) => {

      const UpdatedCart = orderdItems.filter(pd => pd.key !== key);
      setorderdItems(UpdatedCart);
      deleteFromDb(key)

      
      // let currentProduct = orderdItems.find(pd => pd.key === key);
      // const quantityRemover = () => {
      //    currentProduct.quantity = currentProduct.quantity - 1;
      //    const withOutCurrentArray = orderdItems.filter(pd => pd.key !== key);

      //    const updateTheCart = [currentProduct, ...withOutCurrentArray,];
      //    setorderdItems(updateTheCart);
      //    deleteFromDb(key)

      // }
      // const removeForever = () => {
      //    const UpdatedCart = orderdItems.filter(pd => pd.key !== key);
      //    setorderdItems(UpdatedCart);
      //    deleteFromDb(key)
      // } 


      // currentProduct.quantity > 1 ? quantityRemover(quantityRemover) : removeForever(currentProduct);


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
        <div className="review-page-conatainer">
             
             <div className="review-proudct-area">
             { 
               orderdItems.map(pd => <Product product={pd}
                  quantity={true}
                  key={pd.key}
                  removeItem={removeItem}
                  ></Product>)
                  
               }
             </div>

             <div className="review-process-area">
                  <OrderTotal 
                     cartItems = {orderdItems}
                  ></OrderTotal>
             </div>

         

        </div>
    );
};

export default Review; 