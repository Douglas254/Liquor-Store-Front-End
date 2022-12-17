import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import {SiGnuprivacyguard} from "react-icons/si"

const initialValues = {
  name: "",
  username: "",
  dob: "",
  email: "",
  phone: "",
  password: "",
  cpassword: "",
};

function SignUp() {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {
        actions.resetForm();
        console.log(values);
      },
    });

  // console.log(touched);
  return (
    <>
      <div className="flex justify-center items-center m-auto w-1/4 md:w-3/4">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className="text-3xl uppercase text-center font-bold my-8 flex mx-3 gap-2">
            <span>
              <SiGnuprivacyguard />
            </span>
            signup
          </h1>
          {/* Full Name */}
          <label className="block font-semibold pt-3" htmlFor="name">
            Full Name:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="text"
            name="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.name && touched.name && <p>{errors.name}</p>}
          </div>

          {/* Username */}
          <label className="block font-semibold pt-3" htmlFor="name">
            Username:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="text"
            name="username"
            value={values.username}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.username && touched.username && <p>{errors.username}</p>}
          </div>

          {/* Date of Birth */}
          <label className="block font-semibold pt-3" htmlFor="name">
            Date Of Birth:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="date"
            name="dob"
            value={values.dob}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.dob && touched.dob && <p>{errors.dob}</p>}
          </div>

          {/* Email */}
          <label className="block font-semibold pt-3" htmlFor="email ">
            Email:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="text"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.email && touched.email && <p>{errors.email}</p>}
          </div>

          {/* Phone Number */}
          <label className="block font-semibold pt-3" htmlFor="email ">
            Phone:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="text"
            name="phone"
            value={values.phone}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.phone && touched.phone && <p>{errors.phone}</p>}
          </div>

          {/* Password */}
          <label className="block font-semibold pt-3" htmlFor="passw ord">
            Password:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="password"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.password && touched.password && <p>{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <label className="block font-semibold pt-3" htmlFor="cpass word">
            Confirm Password:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="password"
            name="cpassword"
            value={values.cpassword}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.cpassword && touched.cpassword && <p>{errors.cpassword}</p>}
          </div>

          {/* Submit Form */}
          <button
            className="border bg-red-400 my-5 py-2 font-bold transition-all ease-in-out hover:scale-105 rounded-md"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
