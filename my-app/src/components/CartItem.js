function CartItem({ item }) {
  return (
    <div className="flex">
      <div>{item.title}</div>
    </div>
  );
}

export default CartItem;
