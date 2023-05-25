import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "react";

//redux-thunk to async create the actionc creator
export const searchRepos = (term: string) => {
  //thunk - dispatch is how we dispatch actions into the redux store
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOS,
    });

    const url = "http://registry.npmjs.org/-/v1/search";
    try {
      const { data } = await axios.get(url, { params: { text: term } });

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOS_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOS_ERROR,
        payload: err.message,
      });
    }
  };
};
