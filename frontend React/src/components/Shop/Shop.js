import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../../fakeData/products.json'
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';




const Shop = () => {

        
    const [allData, setAllData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)


    const [items, Setitems] = useState([]);

    useEffect(() => {

        const myCarts = getStoredCart();
        const items = Object.keys(myCarts);
 
          const CartItems = items.map(key => {
              
             let AllProducts = [];
            const singleProduct = Products.find(pd => pd.key === key);
            const ProdcutQuantity = myCarts[key];

            if(ProdcutQuantity > 1){
                for (let index = 0; index <= ProdcutQuantity; index++) {                   
                    AllProducts.push(singleProduct);                   
                }
            } else {
                AllProducts.push(singleProduct);    
            }

            let totalPrice = 0;
            AllProducts.map(pd => totalPrice += pd.price);
            setTotalPrice(totalPrice)

          return AllProducts;
             
        });


        Setitems(CartItems)
        setAllData(Products)


        return () => {
            setAllData([]);
        }

    }, []);



    const handleOrder = product => {

        let newItems = [...items, product];
        
        const UpdatedPrice = totalPrice + product.price;
        setTotalPrice(UpdatedPrice);

        Setitems(newItems);
        addToDb(product.key)

    }






    const currentData = allData.slice(0, 10);

    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    currentData.map(pd => <Product product={pd} key={pd.key} orderButton={true} handleOrder={handleOrder}> </Product>)
                }

            </div>

            <div className="cart-container">
                <h4>Order Summary</h4>
                <h6> <b>Items Orderd: {items.length} </b></h6>
                <p><small>Total Price: <b> {totalPrice}  </b>  </small></p>
                <Link to="/review"> 
                 <button  className="order-button"> Review Order </button>
                </Link>
                
            </div>
        </div>
    );
};

export default Shop;