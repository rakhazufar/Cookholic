export const userAction = (user) => {
  return (dispatch) => {
    dispatch({
      type: "USER_LOGIN",
      payload: user,
    });
  };
};

export const componentAction = () => {
  return (dispatch) => {
    dispatch({
      type: "SHOW_POPUP",
    });
  };
};
