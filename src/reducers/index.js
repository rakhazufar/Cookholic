const store = {
  NewRecipe: {},
  Suggestion: {},
  SearchResult: {},
  DetailFood: {},
  number: 0,
};

const reducer = (state = store, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...store,
        number: state.number + 1,
      };
    default:
      return state;
  }
};

export default reducer;
