const defaultStateSuccess = { sendSuccess: false };

export const successReducer = (state = defaultStateSuccess, action) => {
  switch (action.type) {
    case "sendSuccess":
      return { ...state, sendSuccess: action.payload };
    case "sendError":
      return { ...state, sendSuccess: action.payload };
    default:
      return state;
  }
};
