import { INCREMENT } from "./types";

export const increment = () => {
  let action = {
    type: INCREMENT
  };
  console.log("increment action :", action);
  return action;
};

export const incrementAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
};

export const incrementIfOdd = () => {
  return (dispatch, getState) => {
    const { counter } = getState();
    console.log("counter in increment if odd ", counter);
    if (counter % 2 === 0) {
      return;
    }
    dispatch(increment());
  };
};
