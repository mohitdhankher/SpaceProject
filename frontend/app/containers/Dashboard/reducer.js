/*
 *
 * Dashboard reducer
 *
 */
import produce from "immer";
import {DEFAULT_ACTION, SAVE_GRAPH_DATA} from "./constants";

export const initialState = {
    graphData: '',
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SAVE_GRAPH_DATA:
          draft.graphData = action.data;
        break;
    }
  });

export default dashboardReducer;
