export const ACTIONS = {
  ADDNAME: "ADD-NAME",
};
export default function reducer(state, action) {
  switch (action.type) {
    case "inputChange":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "addPrice":
      return {
        ...state,
        price: state.price,
      };

    default:
      return state;
  }
}
