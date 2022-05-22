import GameImg from './GameImg';
import GameBuy from './GameBuy';

function GameItem({ game }) {
  return (
    <div className="bg-[#1F1F1F] rounded-xl m-[10px]">
      <GameImg game={game} />
      <h1 className="text-xl">{game.title}</h1>
      <div>{game.genres.map((item) => item)}</div>
      <GameBuy game={game} />
    </div>
  );
}

export default GameItem;
