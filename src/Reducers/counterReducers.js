import { INCREMENT } from "./../Actions/types";

export default (reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      let newState = state + 1;
      console.log("new state in increment reducer: ", newState);
      return newState;

    default:
      return state;
  }
});
