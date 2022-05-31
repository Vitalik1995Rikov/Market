import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';

function OrderPage() {
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <div>
      <div>
        {items.map((item) => (
          <OrderItem />
        ))}
      </div>
    </div>
  );
}

export default OrderPage;
