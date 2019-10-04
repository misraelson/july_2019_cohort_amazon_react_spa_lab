import React, { Component } from 'react';
import product from '../data/product.js';
import ProductReviews from './ProductReviews.js'

export default class ProductShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product
    }
  }

  removeReview = (id) => {
    // WE CAN SPREAD THROUGH AN ARRAY INSIDE AN OBJECT
    // console.log("THESE IS THE STATE ==>", ...this.state.product.reviews)
    const reviews = [...this.state.product.reviews].filter((review) => review.id !== id);
    // console.log("AFTER FILTER ==>",reviews)
    // 🍩 DONUT SET STATE DIRECTLY ❌
    // this.state.product.reviews = reviews
    this.setState( () => (
      { product: {
        // using spread operator we can spread over PROPERTIES of an object, not the object itself
        ...this.state.product,
        reviews: reviews
      }}
    ))
  }


  render() {
    const {title, description, price, seller, reviews } = this.state.product
    const tags = [...this.state.product.tags]
    let {mainStyle, cardWrapStyle, cardStyle} = this.props

    console.log(tags)
    return(
      <div style={mainStyle}>
        <h1>PRODUCT SHOW PAGE</h1>
          <div style={cardStyle}>
            <h3>PRODUCT TITLE: {title}</h3>
            <h3>PRODUCT DESCRIPTION: {description}</h3>
            <h3>PRODUCT PRICE: ${price}</h3>
            <h3>SELLER NAME: {seller.full_name}</h3>
            <h4> TAGS ==> {tags.map( (tag) => (tag.name))} </h4>
                  
            <ProductReviews cardWrapStyle={cardWrapStyle} cardStyle={cardStyle} reviews={reviews} reviewDeleteCallback={this.removeReview} />
          </div>
      </div>
    )
  }
}