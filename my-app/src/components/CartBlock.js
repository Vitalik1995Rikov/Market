import { BsCart } from 'react-icons/bs';
import { useSelector } from 'react-redux';

function CartBlock() {
  const games = useSelector((state) => state.cart.itemsInCart);
  const sumOfPrises = games.reduce((accum, game) => (accum += game.price), 0);
  return (
    <div className="flex">
      <BsCart className="h-[30px]" />
      <p className="text-xl">{sumOfPrises}</p>
    </div>
  );
}

export default CartBlock;
