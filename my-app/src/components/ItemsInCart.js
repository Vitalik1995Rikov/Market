function ItemsInCart({ count }) {
  return count > 0 ? <div className="h-5 w-5 rounded-lg bg-[#a83737]">{count}</div> : null;
}

export default ItemsInCart;
