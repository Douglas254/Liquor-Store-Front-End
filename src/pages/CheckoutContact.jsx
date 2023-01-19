import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../schemas/checkout";

import { TbTruckDelivery } from "react-icons/tb";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialValues = {
  delivery_address: "",
  receiver_name: "",
  contact: "",
  alternative_contact: "",
  transaction_code: "",
};

const CheckoutContact = () => {
  // const [response, setResponse] = useState([]);

  const navigate = useNavigate();

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {
        actions.resetForm();
        toast.success("Checked out successfully");
        navigate("/");
        console.log(values);
        postData(values);
      },
    });

  const postData = (data) => {
    if (localStorage.getItem("user") !== null) {
      const token = JSON.parse(localStorage.getItem("user")).token;
      axios
        .post(
          "https://liquorstorev1.pythonanywhere.com/checkout",
          {
            data: data,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          // setCartRemoveRes(res.data);
          console.log(res.data.msg);

          // toast.success(`${res.data.msg}`);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center m-auto w-1/4 md:w-3/4 min-h-screen">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className="text-3xl uppercase text-center font-bold my-8 flex mx-3 gap-2">
            <span>
              <TbTruckDelivery />
            </span>
            Order Details
          </h1>

          {/* Delivery Address */}
          <label className="block font-semibold" htmlFor="delivery_address">
            Delivery Address:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="text"
            name="delivery_address"
            value={values.delivery_address}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.delivery_address && touched.delivery_address && (
              <p>{errors.delivery_address}</p>
            )}
          </div>

          {/* Receiver Name */}
          <label className="block font-semibold" htmlFor="receiver_name">
            Receiver Name:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="text"
            name="receiver_name"
            value={values.receiver_name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.receiver_name && touched.receiver_name && (
              <p>{errors.receiver_name}</p>
            )}
          </div>

          {/* Contact */}
          <label className="block font-semibold" htmlFor="contact">
            Contact:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="number"
            name="contact"
            value={values.contact}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.contact && touched.contact && <p>{errors.contact}</p>}
          </div>

          {/* Alternative Contact */}
          <label className="block font-semibold" htmlFor="alternative_contact">
            Alterative Contact:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="text"
            name="alternative_contact"
            value={values.alternative_contact}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.alternative_contact && touched.alternative_contact && (
              <p>{errors.alternative_contact}</p>
            )}
          </div>

          {/* Transaction Code */}
          <label className="block font-semibold" htmlFor="name">
            Transaction Code:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="text"
            name="transaction_code"
            value={values.transaction_code}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.transaction_code && touched.transaction_code && (
              <p>{errors.transaction_code}</p>
            )}
          </div>

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
