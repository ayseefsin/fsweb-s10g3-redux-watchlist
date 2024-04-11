import { movies } from "./../../movies";
import { NEXT, PREV } from "../actions/moviesAction";
const initialData = {
  movies: movies,
  order: 0,
  disabledButton: "PREV",
};

const moviesReducer = (state = initialData, action) => {
  switch (action.type) {
    case NEXT:
      if (state.order === state.movies.length - 1) {
        return { ...state, disabledButton: "NEXT" };
      } else {
        return { ...state, order: state.order + 1, disabledButton: null };
      }

    case PREV:
      if (state.order === 0) {
        return { ...state, disabledButton: "PREV" };
      }
      return { ...state, order: state.order - 1, disabledButton: null };
    default:
      return state;
  }
};

export default moviesReducer;
