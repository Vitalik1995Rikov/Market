import React from 'react';
import { useDispatch } from 'react-redux';
import { setItemInCart } from '../redux/cart/reducer';

function Button({ game }) {
  const dispatch = useDispatch();
  function clickButton(e) {
    e.stopPropagation();
    dispatch(setItemInCart(game));
  }
  return (
    <button
      onClick={clickButton}
      className="bg-[#101010] h-8 w-32 rounded-md flex justify-center items-center">
      В корзину
    </button>
  );
}

export default Button;
