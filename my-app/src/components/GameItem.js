import GameImg from './GameImg';
import GameBuy from './GameBuy';

function GameItem({ game }) {
  return (
    <div className="bg-[#1F1F1F] rounded-xl m-[20px]">
      <GameImg img={game.image} />
      <div className="p-[10px]">
        <h1 className="text-xl">{game.title}</h1>
        <div>{game.genres.map((item) => item)}</div>
        <GameBuy game={game} />
      </div>
    </div>
  );
}

export default GameItem;
