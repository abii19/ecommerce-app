import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { instance } from "../api/api";

const AddShops = ({ datas, setDatas }) => {
  const fileRef = useRef(null);
  // const [datas, setDatas] = useState([]);
  const [values, setValues] = useState({
    image: "",
    title: "",
    price: "",
    details: ""
  });
  const [isEdit, setIsEdit] = useState(false);
  const [base64Image, setBase64Image] = useState("");

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log("called: ", reader);
      setBase64Image(reader.result);
    };
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setValues({ ...values, [name]: e.target.files[0] });
      convertToBase64(e.target.files[0]);
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      //Edit
      const index = datas.findIndex((data) => data.id === values.id);
      // Slice
      // setDatas([...datas.slice(0, index), values, ...datas.slice(index + 1)]);

      // Splice
      const newDatas = [...datas];
      const currentTimeStamp = Math.floor(Date.now() / 1000);
      //values: image, base64Image
      newDatas.splice(index, 1, {
        ...values,
        image: base64Image ? base64Image : values.image,
        updatedAt: currentTimeStamp
      });
      setDatas(newDatas);

      // Edit data in last or first | Filter
      // const newDatas = datas.filter((data) => data.id !== values.id);
      // setDatas([values, ...newDatas]);

      //Edit Backend
      try {
        const response = await instance.put(`/shops/${values.id}`, {
          ...values,
          image: base64Image ? base64Image : values.image,
          updatedAt: currentTimeStamp
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      setIsEdit(false);
    } else {
      const id = uuidv4();
      const currentTimeStamp = Math.floor(Date.now() / 1000);
      setDatas([
        {
          id,
          ...values,
          image: base64Image,
          createdAt: currentTimeStamp,
          updatedAt: ""
        },
        ...datas
      ]);

      // Backend
      try {
        const response = await instance.post("/shops", {
          id,
          ...values,
          image: base64Image,
          createdAt: currentTimeStamp,
          updatedAt: ""
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    setValues({
      image: "",
      title: "",
      price: "",
      details: ""
    });
    setBase64Image("");
  };

  const chooseImage = () => {
    fileRef.current.click();
  };

  const handleDelete = (id) => {
    // Splice
    // const index = datas.findIndex((data) => data.id === id);
    // const newDatas = [...datas];
    // newDatas.splice(index, 1);
    // setDatas(newDatas);
    //Filter
    setDatas(datas.filter((data) => data.id !== id));
  };

  const handleEdit = (data) => {
    setIsEdit(true);
    // const editData = datas.find((data) => data.id === id);
    setValues(data);
  };
  return (
    <>
      <div className="container py-10">
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
                  {datas.map((data, index) => {
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
