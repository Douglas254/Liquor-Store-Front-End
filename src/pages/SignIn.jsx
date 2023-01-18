import React, { useState } from "react";
import { useFormik } from "formik";
import { signupSchema } from "../schemas/login";
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialValues = {
  username: "",
  password: "",
};

function SignIn() {
  const [res, setRes] = useState([]);
  const navigate = useNavigate();

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {
        actions.resetForm();
        console.log(values);
        postSignInData(values);
      },
    });

  const postSignInData = (data) => {
    fetch("https://liquorstorev1.pythonanywhere.com/auth/login", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          localStorage.setItem("user", JSON.stringify(data));
          toast.success("Login Successfully");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
        setRes(data);
      })
      .catch((err) => console.log(err));
  };

  console.log(res);
  return (
    <>
      <div className="flex justify-center items-center m-auto w-1/4 md:w-3/4 min-h-screen">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {res.msg && <p className="text-red-900 text-2xl">{res.msg}</p>}
          <h1 className="text-3xl uppercase text-center font-bold my-8 flex mx-3 gap-2">
            <span>
              <BsPersonFill />
            </span>
            login
          </h1>
          {/* Username */}
          <label className="block font-semibold" htmlFor="name">
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

          {/* Submit Form */}
          {res.success ? (
            navigate("/")
          ) : (
            <button
              className="border bg-red-400 my-5 py-2 font-bold transition-all ease-in-out hover:scale-105 rounded-md"
              type="submit"
            >
              Login
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default SignIn;
