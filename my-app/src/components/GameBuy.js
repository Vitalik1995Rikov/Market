import Button from './Button';

function GameBuy({ game }) {
  return (
    <div className="flex justify-end">
      <p className="flex items-center mr-3">{game.price} руб.</p>
      <Button />
    </div>
  );
}

export default GameBuy;
