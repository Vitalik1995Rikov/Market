import { TiDeleteOutline } from 'react-icons/ti';

function OrderItem({ game }) {
  return (
    <div className="flex mb-3">
      <img className="w-[400px] rounded-xl" src={game.image} alt="img" />
      <div>{game.title}</div>
      <TiDeleteOutline />
    </div>
  );
}

export default OrderItem;
