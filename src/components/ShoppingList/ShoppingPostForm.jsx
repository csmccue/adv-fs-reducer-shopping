export default function ShoppingPostForm({
  body,
  onBodyChanged,
  description,
  onSubmit,
  quantity,
  onQuantityChange
}) {
  return <form onSubmit={(e) => {
    e.preventDefault();
    onSubmit(body, description, quantity);
  }}>
    <textarea 
      type="text"
      placeholder="what are you buying?" 
      value={ body } onChange={(e) => {
        onBodyChanged(e.target.value);
      }}/>
    <textarea 
      type="text"
      placeholder="what are you buying?" 
      value={ description } onChange={(e) => {
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
