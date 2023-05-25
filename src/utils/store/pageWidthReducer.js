const defaultStatePageWidth = { pageWidth: document.documentElement.scrollWidth };

export const pageWidthReducer = (state = defaultStatePageWidth, action) => {
  switch (action.type) {
    case "changePageWidth":
      return { ...state, pageWidth: action.payload };
    default:
      return state;
  }
};
