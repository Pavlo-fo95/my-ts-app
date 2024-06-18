import React from 'react';

interface CartProProps {
  imageSrc: string;
  title: string;
  price: string;
}

const CartPro: React.FC<CartProProps> = ({ imageSrc, title, price }) => {
  return (
    <div className="cart">
      <img src={imageSrc} alt={title} className="cart-image" />
      <h2 className="cart-title">{title}</h2>
      <p className="cart-price">{price}</p>
    </div>
  );
}

export default CartPro;