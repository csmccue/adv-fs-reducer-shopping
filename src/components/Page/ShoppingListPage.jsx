import { useContext, useEffect } from 'react';
import { shoppingListCandidateBodyChanged, shoppingListSeenChangedAction } 
  from '../../actions/shopping-list-actions';
import { getPostsEffect } from '../../effects/shopping-list-effects';
import { createShoppingListItem } from '../../services/shopping-list-items';
import { Context } from '../ShoppingListProvider';


export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect (() => {
    getPostsEffect(dispatch);
  }, []);
  const onBodyChanged = (body) => {
    dispatch(shoppingListCandidateBodyChanged(body));
  };
  const dispatchSeenChanged = (postId, seen) => {
    dispatch(shoppingListSeenChangedAction(postId, seen));
  };

  return <section>
    <h1>My Shopping List</h1>
    <ShoppingPostList
      body={state.postCandidateBody}
      onBodyChanged={onBodyChanged}
      onSubmit={async (body) => {
        await createShoppingListItem(body);
        getPostsEffect(dispatch); 
        dispatch(shoppingListCandidateBodyChanged(''));
      }}
    />
    { state.loadingMode === 'loading'
      ? <span>Loading Posts!</span>
      : <ShoppingPostList
        postList={state.postList}
        handleSeenChangedByPostId={(postId, seen) => {
          dispatchSeenChanged(postId, seen);
        }}
      />
    };
  </section>;







}
