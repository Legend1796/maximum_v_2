const defaultStatePopup = { openPopup: false };

export const openReducer = (state = defaultStatePopup, action) => {
  switch (action.type) {
    case "openPopup":
      return { ...state, openPopup: action.payload };
    case "closePopup":
      return { ...state, openPopup: action.payload };
    default:
      return state;
  }
};
