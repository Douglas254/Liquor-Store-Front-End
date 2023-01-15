import React from "react";
// import { useFormik } from "formik";
import { TbTruckDelivery } from "react-icons/tb";

const CheckoutContact = () => {
  return (
    <>
      <div className="flex justify-center items-center m-auto w-1/4 md:w-3/4 min-h-screen">
        <form className="flex flex-col">
          <h1 className="text-3xl uppercase text-center font-bold my-8 flex mx-3 gap-2">
            <span>
              <TbTruckDelivery />
            </span>
            Order Details
          </h1>
          {/* Username */}
          {/* Username */}
          <label className="block font-semibold" htmlFor="name">
            Delivery Address:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="text"
            name="username"
          />
          <label className="block font-semibold" htmlFor="name">
            Receiver Name:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="text"
            name="username"
          />
          {/* Cntact */}
          <label className="block font-semibold" htmlFor="name">
            Contact:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="number"
            name="username"
          />{" "}
          {/* Username */}
          <label className="block font-semibold" htmlFor="name">
            Alterative Contact:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="number"
            name="username"
          />
          {/* Submit Form */}
          <button
            className="border bg-red-400 my-5 py-2 font-bold transition-all ease-in-out hover:scale-105 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CheckoutContact;
