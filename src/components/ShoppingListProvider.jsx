import {
  createContext,
  useReducer,
} from 'react';
import {
  initialState,
  reducer,
} from '../reducer/shopping-list-reducer';
import { reducerLogger } from '../reducer/reducer-logger.js';

export const Context = createContext({
  state: initialState(),
  reducer,
});

export const PostListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducerLogger(reducer),
    initialState(),
  );
  const contextObj = { state, dispatch };
  return <Context.Provider value={ contextObj }>
    {children}
  </Context.Provider>;
};
