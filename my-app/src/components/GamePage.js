import GameImg from './GameImg';
import Genres from './Genres';
import GameBuy from './GameBuy';
import { useSelector } from 'react-redux';

function GamePage() {
  const game = useSelector((state) => state.games.currentGame);
  if (!game) return null;
  return (
    <div className="bg-[#1F1F1F] rounded-xl m-[20px]">
      <div className="p-[10px] flex">
        <div>
          <h1 className="text-xl">{game.title}</h1>
          <iframe
            className="h-[400px] w-[600px]"
            title="video"
            src={game.video}
            frameBorder="0"></iframe>
        </div>
        <div>
          <GameImg img={game.image} />
          <p>{game.description}</p>
          <p>Теги данного продукта:</p>
          <Genres genre={game.genres} />
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
}

export default GamePage;
