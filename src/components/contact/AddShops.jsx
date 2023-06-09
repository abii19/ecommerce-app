import React, { useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  deleteShopItem,
  fetchShopsItems,
  saveShopItems,
  updateShopItems
} from "../utils/shopsApiActions";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByNumber
} from "../features/datas/datasAction";

const AddShops = ({ datas, setDatas }) => {
  const fileRef = useRef(null);
  const dispatch = useDispatch();
  // const [datas, setDatas] = useState([]);
  const [values, setValues] = useState({
    image: "",
    title: "",
    price: "",
    details: ""
  });
  const [isEdit, setIsEdit] = useState(false);
  const [base64Image, setBase64Image] = useState("");
  const [search, setSearch] = useState("");

  // Errors
  const [errors, setErrors] = useState({
    image: "",
    title: "",
    price: "",
    details: ""
  });

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log("called: ", reader);
      setBase64Image(reader.result);
    };
  };

  const validateForm = (passedValues) => {
    let isValid = true;
    const error = { image: "", title: "", price: "", details: "" };
    if (passedValues.image) {
      const ext = passedValues.image.type.split("/")[1];
      const size = passedValues.image.size;
      if (ext !== "jpg" && ext !== "png" && ext !== "jpeg") {
        console.log(ext);
        error.image = "Invalid file type.";
        isValid = false;
      } else if (size > 200000) {
        console.log(size);
        error.image = "File must be smaller than 200KB.";
        isValid = false;
      }
    }
    if (!passedValues.title) {
      error.title = "Title is required";
      isValid = false;
    }
    if (!passedValues.price) {
      error.price = "Price is required";
      isValid = false;
    } else if (passedValues.price > 10000) {
      error.price = "Price must be smaller than 10000";
      isValid = false;
    }
    if (!passedValues.details) {
      error.details = "Details is required";
      isValid = false;
    }
    // if (error.title || error.image || error.price || error.details)
    //   isValid = false;
    setErrors(error);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setValues({ ...values, [name]: e.target.files[0] });
      validateForm({ ...values, [name]: e.target.files[0] });
      convertToBase64(e.target.files[0]);
    } else {
      setValues({ ...values, [name]: value });
      validateForm({ ...values, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form Validate
    const checkIsFromValidated = validateForm(values);
    if (checkIsFromValidated) {
      if (isEdit) {
        //Edit
        // const index = datas.findIndex((data) => data.id === values.id);
        const currentTimeStamp = Math.floor(Date.now() / 1000);
        // Slice
        // setDatas([...datas.slice(0, index), values, ...datas.slice(index + 1)]);

        // Splice
        // const newDatas = [...datas];
        //values: image, base64Image
        // newDatas.splice(index, 1, {
        //   ...values,
        //   image: base64Image ? base64Image : values.image,
        //   updatedAt: currentTimeStamp
        // });
        // setDatas(newDatas);

        // Edit data in last or first | Filter
        // const newDatas = datas.filter((data) => data.id !== values.id);
        // setDatas([values, ...newDatas]);

        //Edit Backend
        await updateShopItems({
          ...values,
          image: base64Image ? base64Image : values.image,
          updatedAt: currentTimeStamp
        });
        await fetchShopsItems(setDatas);

        setIsEdit(false);
      } else {
        const id = uuidv4();
        const currentTimeStamp = Math.floor(Date.now() / 1000);
        // setDatas([
        //   {
        //     id,
        //     ...values,
        //     image: base64Image,
        //     createdAt: currentTimeStamp,
        //     updatedAt: ""
        //   },
        //   ...datas
        // ]);

        // Backend
        await saveShopItems({
          id,
          ...values,
          image: base64Image,
          createdAt: currentTimeStamp,
          updatedAt: ""
        });
        await fetchShopsItems(setDatas);
      }
      setValues({
        image: "",
        title: "",
        price: "",
        details: ""
      });
      setBase64Image("");
    }
  };

  const chooseImage = () => {
    fileRef.current.click();
  };

  const handleDelete = async (id) => {
    // Splice
    // const index = datas.findIndex((data) => data.id === id);
    // const newDatas = [...datas];
    // newDatas.splice(index, 1);
    // setDatas(newDatas);
    //Filter

    await deleteShopItem(id);
    await fetchShopsItems(setDatas);

    // setDatas(datas.filter((data) => data.id !== id));
  };

  const handleEdit = (data) => {
    setIsEdit(true);
    // const editData = datas.find((data) => data.id === id);
    setValues(data);
  };

  // Redux
  const [inputValue, setInputValue] = useState(0);
  const handleIncrementByNumber = (e) => {
    e.preventDefault();
    dispatch(incrementByNumber(inputValue));
  };

  const filteredData = useMemo(() => {
    let filteredMemoData = datas;
    if (search) {
      filteredMemoData = filteredMemoData.filter(
        (item) =>
          item.title
            .trim()
            .toLowerCase()
            .includes(search.trim().toLowerCase()) ||
          item.price.includes(search.toLowerCase())
      );
    }
    return filteredMemoData;
  }, [search, datas]);

  return (
    <>
      <div className="container py-10">
        {/* -------------- */}
        <form onSubmit={handleIncrementByNumber}>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Increment by Numver</button>
        </form>
        <button className="btn" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>

        {/* ------------------------ */}
        <div className="grid grid-cols-3 gap-14">
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-body">Select Image</label>
                <input
                  ref={fileRef}
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="hidden"
                />
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="bg-blue-400 px-6 py-2 mt-1 rounded"
                    onClick={chooseImage}
                  >
                    Choose Image
                  </button>
                  <p>{values?.image?.name}</p>
                </div>
                {errors.image && (
                  <p className="text-red-500 pt-1.5">{errors.image}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="text-body">Title</label>
                <input
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  className="block"
                />
                {errors.title && (
                  <p className="text-red-500 pt-1.5">{errors.title}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="text-body">Price</label>
                <input
                  type="number"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  className="block"
                />
                {errors.price && (
                  <p className="text-red-500 pt-1.5">{errors.price}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="text-body">Details</label>
                <textarea
                  name="details"
                  value={values.details}
                  onChange={handleChange}
                  rows={6}
                  cols={40}
                  className="block"
                />
                {errors.details && (
                  <p className="text-red-500 pt-1.5">{errors.details}</p>
                )}
              </div>
              <button
                type="submit"
                className="px-8 py-3 rounded-md bg-primary text-content-primary text-body"
              >
                {isEdit ? "Update" : "Submit"}
              </button>
            </form>
          </div>
          <div className="col-span-2">
            <div className="mt-8">
              <div className="mb-4">
                <input
                  type="text"
                  className=""
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search with title and price..."
                />
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left bg-primary">
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Details</th>
                    <th className="px-4 py-2">Created At</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((data, index) => {
                    return (
                      <tr key={data.id} className="border-b">
                        <td className="px-4 py-2">{data.id}</td>
                        <td className="px-4 py-2">
                          {data.image && (
                            <img
                              src={data.image}
                              alt=""
                              className="w-16 h-16 object-contain"
                            />
                          )}
                        </td>
                        <td className="px-4 py-2">{data.title}</td>
                        <td className="px-4 py-2">{data.price}</td>
                        <td className="px-4 py-2">{data.details}</td>
                        <td className="px-4 py-2">{data.createdAt}</td>
                        <td className="px-4 py-2">
                          <button
                            className="px-3 text-sm py-2 rounded bg-blue-300"
                            onClick={() => handleEdit(data)}
                          >
                            Edit
                          </button>
                          <button
                            className="px-3 text-sm py-2 rounded bg-red-400 ml-2"
                            onClick={() => handleDelete(data.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddShops;
