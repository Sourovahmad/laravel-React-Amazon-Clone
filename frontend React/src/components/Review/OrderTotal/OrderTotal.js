import React, { useEffect, useState } from 'react';

const OrderTotal = (props) => {

    const items = props.cartItems;

    let TotalCost = 0;
    items.map(pd =>  TotalCost += pd.price * pd.quantity)

    return (
        <div>
        <h1> Order Summery </h1>

            <p><b> Total Item:  { items.length}  </b></p>
            <p><b className="h4"> Total Cost:  <span className="text-danger"> {TotalCost} </span>   </b></p> 


        <div className="text-center">
            <button onClick={props.orderPlacedHandle} className="order-button">
                Place Order
            </button>
            </div>

        </div>
    );
};

export default OrderTotal;