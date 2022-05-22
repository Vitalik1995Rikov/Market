import GameImg from './GameImg';
import GameBuy from './GameBuy';
import Genres from './Genres';

function GameItem({ game }) {
  return (
    <div className="bg-[#1F1F1F] rounded-xl m-[20px]">
      <GameImg img={game.image} />
      <div className="p-[10px]">
        <h1 className="text-xl">{game.title}</h1>
        <div className="flex flex-row">
          {game.genres.map((genre) => (
            <Genres genre={genre} key={genre} />
          ))}
        </div>
        {/* <div>{game.genres.map((item) => item)}</div> */}
        <GameBuy game={game} />
      </div>
    </div>
  );
}

export default GameItem;
