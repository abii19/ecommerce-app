import { instance } from "../../api/api";

export const fetchAndSaveShopsData = () => async (dispatch) => {
  try {
    const response = await instance.get(`/shops`);
    dispatch({
      type: "FETCH_SHOPS_DATA",
      payload: response.data
    });
    // console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const saveShopsData = (data) => {
  return {
    type: "FETCH_SHOPS_DATA",
    payload: data
  };
};
