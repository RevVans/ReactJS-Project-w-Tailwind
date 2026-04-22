import React from 'react';
import ProductCard from '../components/Props';

export default function ProductPage() {
  return (
    <div>
      <ProductCard
      title="Gaming Mouse"
      price={500000}
      category="Electronics"
      isStockEmpty={false}
      discount={0}
      />

      <ProductCard
      title="Laptop"
      price={10000000}
      category="Electronics"
      isStockEmpty={true}
      discount={25}
      />

      <ProductCard
      title="Mouse Pad"
      price={20000}
      category="Accessories"
      isStockEmpty={false}
      discount={10}
      />
    </div>
    
  );
}
