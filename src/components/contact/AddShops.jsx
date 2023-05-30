import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddShops = () => {
  const fileRef = useRef(null);
  const [datas, setDatas] = useState([]);
  const [values, setValues] = useState({
    image: "",
    title: "jhkj",
    price: "",
    details: ""
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setValues({ ...values, [name]: e.target.files[0] });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    const id = uuidv4();
    setDatas([{ id, ...values }, ...datas]); //
    setValues({
      image: "",
      title: "",
      price: "",
      details: ""
    });
  };

  const chooseImage = () => {
    fileRef.current.click();
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
                  type="number"
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
                Submit
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
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {datas.map((data, index) => {
                    return (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2">{data.id}</td>
                        <td className="px-4 py-2">
                          {data.image && (
                            <img
                              src={URL.createObjectURL(data.image)}
                              alt=""
                              className="w-16 h-16 object-contain"
                            />
                          )}
                        </td>
                        <td className="px-4 py-2">{data.title}</td>
                        <td className="px-4 py-2">{data.price}</td>
                        <td className="px-4 py-2">{data.details}</td>
                        <td className="px-4 py-2">
                          <button className="px-3 text-sm py-2 rounded bg-blue-300">
                            Edit
                          </button>
                          <button className="px-3 text-sm py-2 rounded bg-red-400 ml-2">
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
