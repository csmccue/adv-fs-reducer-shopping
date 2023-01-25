import { useContext, useEffect } from 'react';
import { 
  shoppingListCandidateBodyChanged, 
  shoppingListCandidateDescriptionChanged, 
  shoppingListCandidateQuantityChanged, 
  shoppingListSeenChangedAction } 
  from '../../actions/shopping-list-actions';
import { getPostsEffect } from '../../effects/shopping-list-effects';
import { 
  createShoppingListItem, 
  updateShoppingItem } 
  from '../../services/shopping-list-items';
import ShoppingPostForm from '../ShoppingList/ShoppingPostForm';
import ShoppingPostList from '../ShoppingList/ShoppingPostList';
import { Context } from '../ShoppingListProvider';


export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect (() => {
    getPostsEffect(dispatch);
  }, []);

  const onBodyChanged = (body) => {
    dispatch(shoppingListCandidateBodyChanged(body));
  };
  const onDescriptionChanged = (description) => {
    dispatch(shoppingListCandidateDescriptionChanged(description));
  };

  const onQuantityChanged = (quantity) => {
    dispatch(shoppingListCandidateQuantityChanged(quantity));
  };
  
  const dispatchSeenChanged = (postId, seen) => {
    dispatch(shoppingListSeenChangedAction(postId, seen));
    updateShoppingItem(dispatch);
  };


  return <section>
    <h1>My Shopping List</h1>
    <ShoppingPostForm
      body={state.postCandidateBody}
      description={state.postCandidateDescription}
      quantity={state.postCandidateQuantity}
      onBodyChanged={onBodyChanged}
      onDescriptionChanged={onDescriptionChanged}
      onQuantityChanged={onQuantityChanged}
      onSubmit={async (body, description, quantity) => {
        await createShoppingListItem(body, description, quantity);
        getPostsEffect(dispatch); 
        dispatch(shoppingListCandidateBodyChanged(''));
        dispatch(shoppingListCandidateDescriptionChanged(''));
        dispatch(shoppingListCandidateQuantityChanged(''));
      }}
    />
    { state.loadingMode === 'loading'
      ? <span>Loading Posts!</span>
      : <ShoppingPostList
        shoppingList={state.shoppingList}
        handleSeenChangedByPostId={(postId, seen) => {
          dispatchSeenChanged(postId, seen);
        }}
      />
    };
  </section>;
}
