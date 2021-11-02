import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../../fakeData/products.json'
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';




const Shop = () => {

        
    const [allData, setAllData] = useState([]);
    let [firstInput, setFirstInput] = useState(0);
    let [secondInput, setSecondInput] = useState(10);
    const [totalPrice, setTotalPrice] = useState(0)



    useEffect(() => {

        setAllData(Products)
        return () => {
            setAllData([]);
        }

    }, []);


    const [items, Setitems] = useState([]);

    const handleOrder = product => {

        let newItems = [...items, product];

        // const total = newItems.reduce((totalPrice, item) => totalPrice + item.price, 0)
        let total = 0;
        newItems.map(el => total += el.price)
        setTotalPrice(total);
        addToDb(product.key)
        Setitems(newItems);

    }

    const numberChanger = num => {
        let result = (Number(num)).toFixed(2);
        return result;
    }




    const currentData = allData.slice(firstInput, secondInput);

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
                <p><small>Total Price: <b> ${numberChanger(totalPrice)} </b>  </small></p>
                <Link to="/review"> 
                 <button  className="order-button"> Review Order </button>
                </Link>
                
            </div>
        </div>
    );
};

export default Shop;