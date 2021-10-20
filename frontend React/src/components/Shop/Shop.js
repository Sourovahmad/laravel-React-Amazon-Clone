import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../../fakeData/products.json'
import Product from '../Product/Product';



const Shop = () => {

    const [allData, setAllData] = useState([]);

    useEffect(() => {

        setAllData(Products)
        return () => {
            setAllData([]);
        }

    }, [])



    let [firstInput, setFirstInput] = useState(0);
    let [secondInput, setSecondInput] = useState(10);

    const currentData = allData.slice(firstInput, secondInput);

    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    currentData.map(pd => <Product product={pd}> </Product>)
                }




            </div>

            <div className="cart-container">
                <h3>hi iam cart containeer
                </h3>
            </div>
        </div>
    );
};

export default Shop;