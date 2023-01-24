export default function ShoppingPostForm({
  body,
  onBodyChanged,
  description,
  onSubmit,
  quantity,
  onQuantityChanged,
  onDescriptionChanged
}) {
  return <form onSubmit={(e) => {
    e.preventDefault();
    onSubmit(body, description, quantity);
  }}>
    <textarea 
      type="text"
      placeholder="Item" 
      value={ body } 
      onChange={(e) => {
        onBodyChanged(e.target.value);
      }}/>
    <textarea 
      type="text"
      placeholder="Description" 
      value={ description } 
      onChange={(e) => {
        onDescriptionChanged(e.target.value);
      }}/>
    <input
      type="number"
      placeholder="How many?"
      value={ quantity }
      onChange={(e) => {
        onQuantityChanged(e.target.value);
      }}/>
    <button type="submit">submit</button>
  </form>;
}
