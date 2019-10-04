import React from 'react';
import '../styles/ProductReviews.css';

const ProductReview = (props) => {
  const {body, rating, created_at, reviewer_name} = props.review
  return (
    <div className="ProductReview">
      <h1>PRODUCT REVIEW</h1>
      <h1>Review ==> {body}</h1>
      <h4>Rating ==> {rating}</h4>
      <h4>Created At ==> {created_at}</h4>
      <h5>Reviewer ==> {reviewer_name}</h5>
    </div>
  )
}
export default ProductReview;