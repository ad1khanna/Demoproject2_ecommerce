import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  }
  
  const handleAddToCart = () => {
    // Add product to cart with specified quantity
    alert(`Added ${quantity} items to cart`);
  }
  
  return (
    <div className="container">
      <h1>Product Name</h1>
      <img src="/static/product-image.jpg" alt="Product Image" className="img-fluid" />
      <p>Description of product goes here.</p>
      <h4>Price: $99.99</h4>
      <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" className="form-control" id="quantity" value={quantity} onChange={handleQuantityChange} />
      </div>
      <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

ReactDOM.render(<ProductPage />, document.getElementById('root'));
