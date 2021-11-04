import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';


const Product = (props) => {

    const product = props.product;
    const isRemoved = props.removeItem;


    return (
        <div className="singleProduct">

            <div className="imageSection">
                <img src={product.img} alt="" />
            </div>

            <div className="contentSection">
                <h4 className="product-name"> <Link to={`/product/${product.key}`}>   {product.name} </Link>   </h4>
                <br />

                <p><small>  By  <b>{product.seller} </b>  </small></p>
                <p>Price : <b> {product.price} </b>  </p>

                <p><small> Only <b> {product.stock}</b> left. Order Soon</small></p>

                {
                   props.quantity === true &&
                    <p><small> Quantity: <b> {product.quantity}</b></small></p>
                }
                {
                    props.orderButton === true &&
                    <button onClick={() => props.handleOrder(product)} className="order-button">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart 
                    </button>
                }
                {
                    isRemoved && 
                    <button onClick={() => isRemoved(product.key)} className="order-button">
                    <i className="fa fa-trash" aria-hidden="true"></i> Remove
                    </button>

                }

            </div>

        </div>
    );
};

export default Product;