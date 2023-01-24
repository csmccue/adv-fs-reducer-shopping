export const initialState = () => {
  return {
    loadingMode: 'at-rest',
    loadingError: null,
    postCandidateBody: '',
    postCandidateDescription: '',
    postCandidateQuantity: '',
    shoppingList: [],
  };
};

export const reducer = (state, action) => {
  switch(action.type) {
    case 'shopping-list-load-start':
      return {
        ...state,
        loadingMode: 'loading',
      };
    
    case 'shopping-list-load-error':
      return {
        ...state,
        loadingMode: 'error',
        loadingError: action.error,
      };

    case 'shopping-list-load-success':
      return {
        ...state,
        shoppingList: action.shoppingList,
        loadingMode: 'success',
      };

    case 'shopping-list-candidate-body-changed':
      return {
        ...state,
        postCandidateBody: action.body,
      };
    case 'shopping-list-candidate-description-changed':
      return {
        ...state,
        postCandidateDescription: action.description,
      }; 
      
    case 'shopping-list-candidate-quantity-changed':
      return {
        ...state,
        postCandidateQuantity: action.quantity,
      };

    case 'shopping-list-seen-changed': { 
      const newList = [...state.shoppingList];
      const newIndex = newList.findIndex(
        item => item.id === action.itemId
      );
      newList[newIndex] = {
        ...newList[newIndex],
        checked: action.checked 
      };
      return { 
        ...state,
        shoppingList: newList
      };
    }



      
    case 'shopping-list-seen-changed': {
      const shoppingList = [...state.shoppingList];
      const index = shoppingList.findIndex(post => post.id === action.postId);
      shoppingList[index] = {
        ...shoppingList[index],
        seen: action.seen,
      };
      return {
        ...state,
        shoppingList,
      };
    }

    default:
      console.error(
        `Action type not supported ${action.type}.`,
        action,
      );
      return state;
  }
};
