import React from "react";

const AddShops = () => {
  return (
    <>
      <div className="container py-10">
        <div className="grid grid-cols-3 gap-14">
          <div className="">
            <form action="">
              <div className="mb-4">
                <label className="text-body">Select Image</label>
                <input
                  type="file"
                  name=""
                  value=""
                  onChange=""
                  className="block"
                />
              </div>
              <div className="mb-4">
                <label className="text-body">Title</label>
                <input
                  type="text"
                  name=""
                  value=""
                  onChange=""
                  className="block"
                />
              </div>
              <div className="mb-4">
                <label className="text-body">Price</label>
                <input
                  type="number"
                  name=""
                  value=""
                  onChange=""
                  className="block"
                />
              </div>
              <div className="mb-4">
                <label className="text-body">Details</label>
                <textarea
                  type="number"
                  name=""
                  value=""
                  onChange=""
                  rows={6}
                  cols={40}
                  className="block"
                />
              </div>
              <button className="px-8 py-3 rounded-md bg-primary text-content-primary text-body">
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
                  <tr className="border-b">
                    <td className="px-4 py-2">ID</td>
                    <td className="px-4 py-2">Image</td>
                    <td className="px-4 py-2">Title</td>
                    <td className="px-4 py-2">Price</td>
                    <td className="px-4 py-2">Details</td>
                    <td className="px-4 py-2">
                      <button className="px-3 text-sm py-2 rounded bg-blue-300">
                        Edit
                      </button>
                      <button className="px-3 text-sm py-2 rounded bg-red-400 ml-2">
                        Delete
                      </button>
                    </td>
                  </tr>
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
