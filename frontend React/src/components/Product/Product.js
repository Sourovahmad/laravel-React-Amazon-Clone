import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';


const Product = (props) => {



    const product = props.product;

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

                <button onClick={() => props.handleOrder(product)} className="order-button"> <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</button>

            </div>

        </div>
    );
};

export default Product;