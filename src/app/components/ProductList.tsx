import ProductCard from './ProductCard';
import Image from 'next/image';

const products = [
  { title: 'The Dandy Chair', price: '£250', imageUrl: '/images/Dandychair.png' },
  { title: 'The Parent', price: '£250', imageUrl: '/images/Parent.png' },
  { title: 'The Stanley Table', price: '£125', imageUrl: '/images/Table.png' },
  { title: 'New Lamp', price: '£250', imageUrl: '/images/Newlamp.png' },
  { title: 'Andel Vase', price: '£95', imageUrl: '/images/Andel.png' },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
