import GameImg from './GameImg';
import GameBuy from './GameBuy';
import Genres from './Genres';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../redux/games/reducer';

function GameItem({ game }) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    history('/app');
  };
  return (
    <div className="bg-[#1F1F1F] rounded-xl m-[20px]" onClick={handleClick}>
      <GameImg img={game.image} />
      <div className="p-[10px]">
        <h1 className="text-xl">{game.title}</h1>
        <div className="flex flex-row">
          {game.genres.map((genre) => (
            <Genres genre={genre} key={genre} />
          ))}
        </div>
        <GameBuy game={game} />
      </div>
    </div>
  );
}

export default GameItem;
