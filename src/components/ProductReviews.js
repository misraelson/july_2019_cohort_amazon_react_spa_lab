import React, { Component } from 'react';

export default class ProductReviews extends Component {
  render() {
    let {reviews} = this.props
    return(
      <div style={this.props.cardWrapStyle}>
        <h1>REVIEWS</h1>
        {reviews.map( (review, index) => (
          <div key={index} style={this.props.cardStyle}>
            <h3>RATING ==> {review.rating}</h3>
            <h3>REVIEW BODY ==> {review.body}</h3>
            <h3>REVIEWER NAME ==> {review.reviewer.full_name}</h3>
            <button onClick={() => this.props.reviewDeleteCallback(review.id)}>REMOVE REVIEW</button>
          </div>
        ))}
      </div>
    )
  }
}