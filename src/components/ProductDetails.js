import React from 'react';
import '../styles/ProductDetails.css';

const ProductDetails = (props) => {
  return (
    <div className="ProductShow">
      <h1>PRODUCT DETAILS</h1>
      <h1>{props.product.title}</h1>
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
      <p>{props.product.created_at}</p>
      <p>{props.product.seller_name}</p>
    </div>
  )
}
export default ProductDetails;