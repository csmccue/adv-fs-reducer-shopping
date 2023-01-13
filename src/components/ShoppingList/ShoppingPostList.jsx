import ShoppingPost from './ShoppingPost';

export default function ShoppingPostList({
  postList,
  handleSeenChangedByPostId,
}) {
  return <ol>
    {postList.map(post => {
      return <li key={post.id}>
        <ShoppingPost post={post} handleSeenChanged={(seen) => {
          handleSeenChangedByPostId(post.id, seen);
        }}/>
      </li>;
    })}
  </ol>;
}