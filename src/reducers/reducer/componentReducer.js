const initialState = {
  popup: false,
};

const componentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_POPUP":
      return {
        ...state,
        popup: !state.popup,
      };
    default:
      return state;
  }
};

export default componentReducer;
