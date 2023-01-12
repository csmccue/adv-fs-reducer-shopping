export const shoppingListLoadSuccessAction = (shoppingList) => {
  return {
    type: 'shopping-list-load-success',
    shoppingList,
  };
};

export const shoppingListLoadStartAction = () => {
  return {
    type: 'shopping-list-load-start',
  };
};

export const shoppingListLoadErrorAction = (error) => {
  return {
    type: 'shopping-list-load-error',
    error,
  };
};

export const shoppingListCandidateBodyChanged = (body) => {
  return {
    body,
    type: 'shopping-list-candidate-body-changed',
  };
};

export const shoppingListSeenChangedAction = (postId, seen) => {
  return {
    postId,
    seen,
    type: 'shopping-list-seen-changed',
  };
};


