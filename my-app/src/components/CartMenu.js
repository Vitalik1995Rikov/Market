import CartItem from './CartItem';

function CartMenu({ games, sumOfPrices }) {
  return (
    <div>
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
