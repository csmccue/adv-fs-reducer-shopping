export const reducerLogger = (reducer) => {
  return (state, action) => {
    const newState = reducer(state, action);
    return newState;
  };
};
