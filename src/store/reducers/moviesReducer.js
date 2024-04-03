import { movies } from "./../../movies";
const initialData = {
  movies: movies,
  sira: 0,
};

const moviesReducer = (state = initialData, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default moviesReducer;
