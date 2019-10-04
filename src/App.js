import React from 'react';
import ProductDetails from './components/ProductDetails';
import ProductReview from './components/ProductReview';
import ProductIndex from './components/ProductIndex';
import ProductShow from './components/ProductShow';
// import myProduct from './data/product'
import './App.css';

const myProduct = {
  title: "WOW PRODUCT",
  description: "SUCH WOW",
  price: '55.50',
  created_at: Date.now(),
  seller_name: "BOB COSTAS",
}

const review = {
  rating: 5,
  body: "Great Product",
  created_at: Date(Date.now()).toString(),
  reviewer_name: "Matthew Israelson",
}

const mainStyle = {
  display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "lightgreen", border: "10px solid black",
}

const cardWrapStyle = {
  display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", margin: "20px", backgroundColor: "salmon"
}

const cardStyle = {
  display: "flex", flexDirection: "column", padding: "20px", margin: "20px", border: "5px solid darkgreen", borderRadius: "15px", backgroundColor: "orangered", minWidth: "300px", maxWidth: "500px",
}

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">AMAZON HEADER</header>
        <h1>WELCOME TO AMAZON! USER: </h1>
      </div>
      <ProductIndex mainStyle={mainStyle} cardWrapStyle={cardWrapStyle} cardStyle={cardStyle} />
      <ProductShow mainStyle={mainStyle} cardWrapStyle={cardWrapStyle} cardStyle={cardStyle} />
    </div>
  );
}

export default App;
