import React, { Component } from 'react';
import products from '../data/products.js';

export default class ProductIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products
    }
  }

  removeProduct(id) {
    // console.log("CLICK HAPPENING", id)

    // CURLY BRACKETS from setState 👇 function, the state needs to be RETURNED
    // this.setState( (prevState) => {
    //   return { products: prevState.products.filter((product) => product.id !== id )}
    // });

    // ROUND BRACKETS from setState 👇  function usus IMPLICIT RETURN
    this.setState( (prevState) => ({ 
      products: prevState.products.filter( (product) => product.id !== id ) 
    }));
  }
  
  render() {
    let {mainStyle, cardWrapStyle, cardStyle} = this.props
    return (
      <div style={mainStyle}>
        <h1>PRODUCTS INDEX PAGE</h1>
        <div style={cardWrapStyle}>
          {this.state.products.map( (product, index) => (
            <div key={index} style={cardStyle}>
              <h2>TITLE: {product.title}</h2>
              <h2>SELLER: {product.seller.full_name}</h2>
              <h2>${product.price}</h2>
              <button onClick={() => this.removeProduct(product.id) }>Remove Me</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
} 