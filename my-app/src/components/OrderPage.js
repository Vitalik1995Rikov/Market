import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';

function OrderPage() {
  const items = useSelector((state) => state.cart.itemsInCart);
  const sumOfPrices = items.reduce((accum, game) => (accum += game.price), 0);
  return (
    <div>
      <div>
        {items.map((item) => (
          <OrderItem game={item} />
        ))}
      </div>
      <div>
        <span>
          {items.length} товаров, на сумму {sumOfPrices}
        </span>
      </div>
    </div>
  );
}

export default OrderPage;
