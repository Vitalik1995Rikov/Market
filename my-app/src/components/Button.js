import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItemInCart } from '../redux/cart/reducer';

function Button({ game }) {
  const items = useSelector((state) => state.cart.itemsInCart);
  const isIteminCart = items.some((item) => item.id === game.id);

  const dispatch = useDispatch();
  function clickButton(e) {
    e.stopPropagation();
    dispatch(setItemInCart(game));
  }
  return (
    <button
      onClick={clickButton}
      className="bg-[#101010] h-8 w-32 rounded-md flex justify-center items-center">
      {isIteminCart ? 'Убрать' : 'В корзину'}
    </button>
  );
}

export default Button;
