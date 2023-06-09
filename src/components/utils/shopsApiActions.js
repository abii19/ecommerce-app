import { instance } from "../api/api";
import { saveShopsData } from "../features/shops/shopsAction";

// export const fetchShopsItems = async () => {
//   try {
//     const response = await instance.get(`/sho`);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

export const fetchShopsItems = async (setDatas, dispatch) => {
  try {
    const response = await instance.get(`/shops`);
    // console.log(response.data);
    setDatas(response.data);
    dispatch(saveShopsData(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchShopsItemsById = async (id) => {
  try {
    const response = await instance.get(`/shops/${id}`);
    // console.log(response.data); //{}
    // return { message: "success", data: response.data };
    return response.data;
  } catch (error) {
    console.log(error);
    // return { message: "error" };
  }
};

export const saveShopItems = async (data) => {
  try {
    const response = await instance.post("/shops", data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const updateShopItems = async (data) => {
  try {
    const response = await instance.put(`/shops/${data.id}`, data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteShopItem = async (id) => {
  try {
    const response = await instance.delete(`/shops/${id}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
