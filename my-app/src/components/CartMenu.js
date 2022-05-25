function CartMenu({ games, sumOfPrices }) {
  return (
    <div>
      <div>{games.map((item) => item.title)}</div>
      <div>
        {games.length > 0 ? (
          <div>
            <span>Итого:</span>
            <span>{sumOfPrices}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CartMenu;
