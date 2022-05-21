import GameImg from './GameImg';
import GameBuy from './GameBuy';

function GameItem({ game }) {
  return (
    <div>
      <GameImg />
      <div>{game.title}</div>
      <div>{game.genres.map((item) => item)}</div>
      <GameBuy />
    </div>
  );
}

export default GameItem;
