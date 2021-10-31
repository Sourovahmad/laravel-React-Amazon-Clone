import React from 'react';
import { useParams } from 'react-router';
import  FakeData from '../../fakeData/products.json'
import Product from '../Product/Product';

const ProductDetail = () => {

    const {productKey} =  useParams();
    const CurrentProduct = FakeData.find(pd => pd.key === productKey)

    
    return (
        <div><Product product={CurrentProduct}></Product> </div>
    );
};

export default ProductDetail;