import React from 'react'
import ItemCard from '../components/ItemCard';

export default function ItemPage() {

  const items = [
    {
    name: 'Laptop',
    price: 999.99,
    quantity: 20
  },
  {
    name: 'Football',
    price: 50.00,
    quantity: 20
  },
  {
    name: 'Tennis Ball',
    price: 10.00,
    quantity: 10
  },
  {
    name: 'Tennis Ball',
    price: 10.00,
    quantity: 10
  },
  {
    name: 'Tennis Ball',
    price: 10.00,
    quantity: 10
  },
  {
    name: 'Tennis Ball',
    price: 10.00,
    quantity: 10
  },
  {
    name: 'Tennis Ball',
    price: 10.00,
    quantity: 10
  },
  {
    name: 'Tennis Ball',
    price: 10.00,
    quantity: 10
  },

  ];


  return (
    <div className='item-page'>
      <div className='item-list'>
      {items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
      </div>
    </div>
  )
}
