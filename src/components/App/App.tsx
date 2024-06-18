import React from 'react';
import CartPro from '../Cart/CartPro';
import './App.css';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';

const products = [
  {
    imageSrc: image1,
    title: 'Телевізор SAMSUNG UE43CU7100UXUA',
    price: '15 999 ₴'
  },
  {
    imageSrc: image2,
    title: 'Телевізор SAMSUNG UE24N4500AUXUA',
    price: '8 799 ₴'
  },
  {
    imageSrc: image3,
    title: 'Телевізор SAMSUNG UE55CU8500UXUA',
    price: '25 999 ₴'
  },
  {
    imageSrc: image4,
    title: 'Телевізор SAMSUNG QE65LS03BAUXUA',
    price: '58 999 ₴'
  },
  {
    imageSrc: image5,
    title: 'Телевізор SAMSUNG QE55QN85CAUXUA',
    price: '59 999 ₴'
  },
  {
    imageSrc: image6,
    title: 'Телевізор SAMSUNG QE55LS03BAUXUA',
    price: '38 999 ₴'
  },
  {
    imageSrc: image7,
    title: 'ТБ SAMSUNG QE77S90CAUXUA',
    price: '127 499 ₴'
  },
  {
    imageSrc: image8,
    title: 'Телевізор SAMSUNG QE55LS03BAUXUA',
    price: '38 999 ₴'
  },
  {
    imageSrc: image9,
    title: 'Телевізор SAMSUNG UE50CU7100UXUA',
    price: '18 499 ₴'
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="grid">
        {products.map((product, index) => (
          <CartPro
            key={index}
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;