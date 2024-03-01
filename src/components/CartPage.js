import React from 'react';

const CartPage = ({ cartItems, increaseQuantity, decreaseQuantity }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.newPrice) * item.quantity), 0);
    console.log(cartItems)
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div className="cart-item">
              <img src={item.img} alt={item.title} className="cart-item-img" />
              <div className="cart-item-details">
                <p>{item.title}</p>
                
                <p>Price: ${parseFloat(item.newPrice).toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="quantity-controls">
                  <button style={{marginRight:'10px'}} onClick={() => decreaseQuantity(item.title)}>-</button>
                  <button onClick={() => increaseQuantity(item.title)}>+</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="total-price">
        {cartItems == 0 ? 'Cart Is Empty': <p>Total Price : ${totalPrice.toFixed(2)}</p> }
        
      </div>
    </div>
  );
};

export default CartPage;
