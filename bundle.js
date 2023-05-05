import React, { useState } from 'react';

function Product({ product }) {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    // Add the product and quantity to the cart
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
