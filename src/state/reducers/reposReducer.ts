import { ActionType } from "../action-types";
import { Action } from "../actions";

interface ReposState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const intialState = {
  loading: false,
  error: null,
  data: [],
};
//Usually a switch stmt :) on the incoming action
const reducer = (
  state: ReposState = intialState,
  action: Action
): ReposState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOS: //When user clicks search btn
      //100% sure that action is SearchReposAction (usw.)
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
