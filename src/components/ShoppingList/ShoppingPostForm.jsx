export default function ShoppingPostForm({
  body,
  onBodyChanged,
  onSubmit,
  description,
  quantity,
  onQuantityChange
}) {
  return <form onSubmit={(e) => {
    e.preventDefault();
    onSubmit(body, description);
  }}>
    <textarea value={ body } onChange={(e) => {
      onBodyChanged(e.target.value);
    }}/>
    <input
      type="number"
      placeholder="how many?"
      value={ quantity }
      onChange={(e) => {
        onQuantityChange(e.target.value);
      }}/>
    <button type="submit">submit</button>
  </form>;
}
