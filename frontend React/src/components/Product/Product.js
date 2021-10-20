import React from 'react';
import './Product.css';


const Product = (props) => {

    const product = props.product;
    console.log(product);

    return (
        <div className="singleProduct">

            <div className="imageSection">
                <img src={product.img} alt="" />
            </div>

            <div className="contentSection">
                <h4 className="product-name">{product.name}</h4>
            </div>

        </div>
    );
};

export default Product;