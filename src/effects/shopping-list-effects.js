import { 
  shoppingListLoadStartAction, 
  shoppingListLoadSuccessAction, 
  shoppingListLoadErrorAction } 
  from '../actions/shopping-list-actions.js';
import { getShoppingListItems } from '../services/shopping-list-items.js';

export const getPostsEffect = async (dispatch) => {
  dispatch(shoppingListLoadStartAction());
  try {
    const posts = await getShoppingListItems();
    console.log('posts', posts);
    dispatch(shoppingListLoadSuccessAction(posts));
  } catch (error) {
    dispatch(shoppingListLoadErrorAction(error));
  }
};
