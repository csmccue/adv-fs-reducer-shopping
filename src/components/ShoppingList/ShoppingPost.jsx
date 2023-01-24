export default function ShoppingPost({ post, handleSeenChanged }) {
  return <div>
    <input type="checkbox" value={post.seen} onChange={() => {
      handleSeenChanged(!post.seen);
    }}/>
    {post.id}
    {post.item_name}
    {post.quantity}
    {post.description}
  </div>;
}
