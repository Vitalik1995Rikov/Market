import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItemInCart, deleteItemInCart } from '../redux/cart/reducer';

function Button({ game }) {
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const dispatch = useDispatch();
  function clickButton(e) {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemInCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  }
  return (
    <button
      onClick={clickButton}
      className={
        isItemInCart
          ? 'bg-[#aaa8a8] h-8 w-32 rounded-md flex justify-center items-center'
          : 'bg-[#101010] h-8 w-32 rounded-md flex justify-center items-center'
      }>
      {isItemInCart ? 'Убрать' : 'В корзину'}
    </button>
  );
}

export default Button;
