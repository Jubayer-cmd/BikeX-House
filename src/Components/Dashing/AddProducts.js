import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://morning-castle-26727.herokuapp.com/parts", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          toast.success("Place order successfully!");
        } else {
          toast.error("Fail to add product!");
        }
      });
  };
  return (
    <div className="w-100">
      <h1>Add your Products here!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-100 mb-2 p-2"
          {...register("name")}
          placeholder="Name"
          required
        />{" "}
        <br />
        <input
          className=" w-100 mb-2 p-2"
          type="number"
          {...register("price")}
          placeholder="Price"
          required
        />{" "}
        <br />
        <input
          className=" w-100 mb-2 p-2"
          {...register("description")}
          placeholder="Description"
          required
        />{" "}
        <br />
        <input
          className=" w-100 mb-2 p-2"
          type="number"
          {...register("availableQuantity")}
          placeholder="Available Quantity"
          required
        />
        <br />
        <input
          className=" w-100 mb-2 p-2"
          type="number"
          {...register("minimumQuantity")}
          placeholder="Minimum Quantity"
          required
        />
        <br />
        <input
          className=" w-100 mb-2 p-2"
          {...register("image")}
          placeholder="Image Link"
          required
        />
        <br />
        <input
          className=" w-100 mb-2 p-2 bg-primary border-0 rounded text-white"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProducts;
