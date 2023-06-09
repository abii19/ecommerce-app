const initialState = {
  loading: false,
  datas: []
};

export const shopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SHOPS_DATA":
      return { ...state, datas: action.payload };
    default:
      return state;
  }
};
