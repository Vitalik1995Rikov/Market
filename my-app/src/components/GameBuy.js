import Button from './Button';
import React from 'react';

const GameBuy = ({ game }) => {
  return (
    <div className="flex justify-end">
      <p onClick={() => console.log(3)} className="flex items-center mr-3">
        {game.price} руб.
      </p>
      <Button game={game}></Button>
    </div>
  );
};

export default GameBuy;
