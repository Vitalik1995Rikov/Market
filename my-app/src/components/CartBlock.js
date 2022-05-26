import { useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import CartMenu from './CartMenu';

function CartBlock() {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const games = useSelector((state) => state.cart.itemsInCart);
  const sumOfPrises = games.reduce((accum, game) => (accum += game.price), 0);
  return (
    <div className="flex">
      <BsCart className="h-[30px]" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
      {sumOfPrises ? <p className="text-xl">{sumOfPrises} руб.</p> : null}
      <div>{isCartMenuVisible && <CartMenu games={games} sumOfPrices={sumOfPrises} />}</div>
    </div>
  );
}

export default CartBlock;
