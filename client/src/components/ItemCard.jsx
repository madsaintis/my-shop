import React from 'react'

export default function ItemCard({item}) {
    return (
        <div className="item-card">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      );
}
