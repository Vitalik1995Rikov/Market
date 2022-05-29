import GameImg from './GameImg';
import Genres from './Genres';
import GameBuy from './GameBuy';
import { useSelector } from 'react-redux';

function GamePage() {
  const game = useSelector((state) => state.games.currentGame);
  if (!game) return null;
  return (
    <div className="bg-[#1F1F1F] rounded-xl m-[20px]">
      <div>img</div>
      <div className="p-[10px]">
        <h1 className="text-xl">title</h1>
        <iframe title="video" src={game.video} frameBorder="0"></iframe>
        <GameImg img={game.image} />
        <Genres genre={game.genres} />
        <GameBuy game={game} />
      </div>
    </div>
  );
}

export default GamePage;
