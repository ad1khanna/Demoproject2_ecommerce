import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      totalPrice: 0
    };
  }

  componentDidMount() {
    // Retrieve cart items and total price from local storage
    const storedCartItems = localStorage.getItem('cartItems');
    const storedTotalPrice = localStorage.getItem('totalPrice');

    if (storedCartItems && storedTotalPrice) {
      this.setState({
        cartItems: JSON.parse(storedCartItems),
        totalPrice: JSON.parse(storedTotalPrice)
      });
    }
  }

  componentDidUpdate() {
    // Update local storage with current cart items and total price
    localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));
    localStorage.setItem('totalPrice', JSON.stringify(this.state.totalPrice));
  }

  addToCart(item) {
    const { cartItems } = this.state;

    // Check if item already exists in cart
    const itemIndex = cartItems.findIndex(i => i.id === item.id);

    if (itemIndex >= 0) {
      // Item already exists, increment quantity
      cartItems[itemIndex].quantity++;
    } else {
      // Item doesn't exist, add to cart
      item.quantity = 1;
      cartItems.push(item);
    }

    // Update total price
    const totalPrice = this.state.totalPrice + item.price;

    // Update state
    this.setState({ cartItems, totalPrice });
  }

  removeFromCart(item) {
    const { cartItems } = this.state;

    // Check if item exists in cart
    const itemIndex = cartItems.findIndex(i => i.id === item.id);

    if (itemIndex >= 0) {
      // Item exists, decrement quantity
      if (cartItems[itemIndex].quantity > 1) {
        cartItems[itemIndex].quantity--;
      } else {
        // Quantity is 1, remove item from cart
        cartItems.splice(itemIndex, 1);
      }

      // Update total price
      const totalPrice = this.state.totalPrice - item.price;

      // Update state
      this.setState({ cartItems, totalPrice });
    }
  }

  render() {
    const { cartItems, totalPrice } = this.state;

    return (
      <div className="cart">
        <h3>Shopping Cart</h3>
        {cartItems.length > 0 ? (
          <>
            <ul className="cart-items">
              {cartItems.map(item => (
                <li key={item.id}>
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-quantity">{item.quantity}</span>
                    <span className="item-price">${item.price.toFixed(2)}</span>
                  </div>
                  <button className="remove-item" onClick={() => this.removeFromCart(item)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Checkout</button>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    );
  }
}

export default ShoppingCart;
