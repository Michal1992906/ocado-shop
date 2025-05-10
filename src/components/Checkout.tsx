import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => {
    const itemTotal = (item.product.price.main + item.product.price.fractional / 100) * item.quantity;
    return sum + itemTotal;
  }, 0);

  const handleOrder = () => {
    localStorage.setItem('order', JSON.stringify(cart));
    localStorage.setItem('orderTotal', total.toFixed(2));
    window.location.href = '/order-confirmation.html';
  };

  return (
    <div>
      <h1>Podsumowanie</h1>
      {cart.map(item => (
        <p key={item.product.id}>
          {item.product.name} x {item.quantity} = {(item.quantity * (item.product.price.main + item.product.price.fractional / 100)).toFixed(2)} zł
        </p>
      ))}
      <p>Razem: {total.toFixed(2)} zł</p>
      <button onClick={handleOrder}>Złóż zamówienie</button>
      <Link to="/cart">Wróć do koszyka</Link>
    </div>
  );
};

export default Checkout;