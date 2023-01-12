import { 
  shoppingListLoadStartAction, 
  postListLoadSuccessAction, 
  postListLoadErrorAction } 
  from '../actions/shopping-list-actions.js';
import { getShoppingListItems } from '../services/shopping-list-items.js';

export const getPostsEffect = async (dispatch) => {
  dispatch(shoppingListLoadStartAction());
  try {
    const posts = await getShoppingListItems();
    dispatch(postListLoadSuccessAction(posts));
  } catch (error) {
    dispatch(postListLoadErrorAction(error));
  }
};
