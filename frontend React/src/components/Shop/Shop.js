import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../../fakeData/products.json'



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

            <ul>
                {
                    currentData.map(el => <li> {el.name}</li>)
                }
            </ul>

            <div className="product-container">

            </div>

            <div className="cart-container">

            </div>

        </div>
    );
};

export default Shop;