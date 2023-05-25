import { combineReducers } from "redux";
import reposReducer from "./reposReducer";

const reducers = combineReducers({
  repos: reposReducer,
});

export default reducers;

//"Redux workaround" from https://react-redux.js.org/using-react-redux/usage-with-typescript
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//export type AppDispatch = typeof store.dispatch
