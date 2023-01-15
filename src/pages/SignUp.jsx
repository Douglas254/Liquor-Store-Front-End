import React, { useState } from "react";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  gender: "male",
  username: "",
  dob: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const [response, setResponse] = useState([]);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {
        actions.resetForm();
        console.log(values);
        postData(values);
      },
    });

  const postData = (data) => {
    fetch("https://liquorstorev1.pythonanywhere.com/user", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex justify-center items-center m-auto w-1/4 md:w-3/4">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {response.msg && (
            <p className="text-red-900 text-2xl">{response.msg}</p>
          )}
          <h1 className="text-3xl uppercase text-center font-bold my-8 flex mx-3 gap-2">
            <span>
              <SiGnuprivacyguard />
            </span>
            signup
          </h1>
          {/* First Name */}
          <label className="block font-semibold pt-3" htmlFor="name">
            First Name:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="text"
            name="firstName"
            value={values.firstName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.firstName && touched.firstName && <p>{errors.firstName}</p>}
          </div>
          {/* Full Name */}
          <label className="block font-semibold pt-3" htmlFor="name">
            Last Name:
          </label>
          <input
            className="border-b border-gray-400 outline-none py-2"
            type="text"
            name="lastName"
            value={values.lastName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
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
          <p>Gender</p> {" "}
          <input
            type="radio"
            name="gender"
            value="male"
            checked={values.gender === "male"}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label htmlFor="html">Male</label>
          <br /> {" "}
          <input
            type="radio"
            name="gender"
            value="female"
            checked={values.gender === "female"}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label htmlFor="css">Female</label>
          <br /> {" "}
          <input
            type="radio"
            name="gender"
            value="other"
            checked={values.gender === "other"}
          />
          <label htmlFor="javascript">Other</label>
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
            name="confirmPassword"
            value={values.confirmPassword}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="text-red-900 text-sm font-semibold">
            {errors.confirmPassword && touched.confirmPassword && (
              <p>{errors.confirmPassword}</p>
            )}
          </div>
          {/* Submit Form */}
          {response.success ? (
            <Link to="/signin">
              <button
                className="border bg-red-400 my-5 py-2 font-bold transition-all ease-in-out hover:scale-105 rounded-md"
                type="submit"
              >
                Go to Login
              </button>
            </Link>
          ) : (
            <button
              className="border bg-red-400 my-5 py-2 font-bold transition-all ease-in-out hover:scale-105 rounded-md"
              type="submit"
            >
              Sign Up
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default SignUp;
