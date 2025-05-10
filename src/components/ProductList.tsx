import React from 'react';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

type Product = {
  id: number;
  name: string;
  price: {
    main: number;
    fractional: number;
  };
};

const ProductList: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h1>Lista Produktów</h1>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> – {product.price.main},{product.price.fractional.toString().padStart(2, '0')} zł
            <button onClick={() => addToCart(product)}>Dodaj do koszyka</button>
          </li>
        ))}
      </ul>
      <Link to="/cart">Przejdź do koszyka</Link>
    </div>
  );
};

export default ProductList;