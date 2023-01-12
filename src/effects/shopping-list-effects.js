import { 
  shoppingListLoadStartAction, 
  postListLoadSuccessAction, 
  postListLoadErrorAction } 
  from '../actions/shopping-list-actions.js';

export const getPostsEffect = async (dispatch) => {
  dispatch(shoppingListLoadStartAction());
  try {
    const posts = await getPosts();
    dispatch(postListLoadSuccessAction(posts));
  } catch (error) {
    dispatch(postListLoadErrorAction(posts));
  }
};