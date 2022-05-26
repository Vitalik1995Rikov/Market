function CartItem({ item }) {
  return (
    <div className="w-[250px] flex flex-row justify-between">
      <div>{item.title}</div>
      <div>{item.price}</div>
    </div>
  );
}

export default CartItem;
