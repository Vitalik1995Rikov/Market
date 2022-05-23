import Button from './Button';
import { useDispatch } from 'react-redux';
import { setItemsInCart } from '../redux/cart/reducer';

function GameBuy({ game }) {
  const dispatch = useDispatch();

  const clickButton = (e) => {
    // e.stopPropagation();
    dispatch(setItemsInCart(game));
  };

  return (
    <div className="flex justify-end">
      <p className="flex items-center mr-3">{game.price} руб.</p>
      <Button onClick={clickButton} />
    </div>
  );
}

export default GameBuy;
