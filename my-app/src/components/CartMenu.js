import CartItem from './CartItem';

function CartMenu({ games, sumOfPrices }) {
  return (
    <div className="absolute top-[60px] left-[1000px] bg-[#1F1F1F] rounded-2xl">
      <div>
        {games.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div>
        {games.length > 0 ? (
          <div className="flex flex-row justify-between">
            <span>Итого:</span>
            <span>{sumOfPrices}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CartMenu;
