import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => {
    const itemTotal = (item.product.price.main + item.product.price.fractional / 100) * item.quantity;
    return sum + itemTotal;
  }, 0);

  return (
    <div>
      <h1>Koszyk</h1>
      {cart.map(item => (
        <div key={item.product.id}>
          <strong>{item.product.name}</strong> – 
          {item.product.price.main},{item.product.price.fractional.toString().padStart(2, '0')} zł x 
          <input type="number" min="1" value={item.quantity} onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))} />
          <button onClick={() => removeFromCart(item.product.id)}>Usuń</button>
        </div>
      ))}
      <p>Łącznie: {total.toFixed(2)} zł</p>
      <button onClick={() => navigate('/checkout')}>Przejdź do podsumowania</button>
      <Link to="/">Wróć do listy produktów</Link>
    </div>
  );
};

export default Cart;