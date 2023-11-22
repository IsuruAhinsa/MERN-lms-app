"use client";
import { styles } from "@/app/styles/styles";
import React, { FC, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  AiFillGithub,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

type Props = {
  setRoute: (route: string) => void;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const Signup: FC<Props> = ({ setRoute }) => {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: async ({ name, email, password }) => {
      setRoute("Verification");
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full">
      <h1 className={styles.title}>Join to ELearning</h1>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className={styles.label}>
              Enter your Name
            </label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              id="name"
              placeholder="Steve Jobs"
              className={`${errors.name && touched.name && "border-red-500"} ${
                styles.input
              }`}
            />
            {errors.name && touched.name && (
              <span className={styles.error}>{errors.name}</span>
            )}
          </div>

          <div>
            <label htmlFor="email" className={styles.label}>
              Enter your Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="example@mail.com"
              className={`${
                errors.email && touched.email && "border-red-500"
              } ${styles.input}`}
            />
            {errors.email && touched.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>

          <div>
            <div className="w-full relative">
              <label htmlFor="password" className={styles.label}>
                Enter your Password
              </label>
              <input
                type={!show ? "password" : "text"}
                name="password"
                value={values.password}
                onChange={handleChange}
                id="password"
                placeholder="Password!@%"
                className={`${
                  errors.password && touched.password && "border-red-500"
                } ${styles.input}`}
              />
              {!show ? (
                <AiOutlineEye
                  className="absolute bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShow(true)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShow(false)}
                />
              )}
            </div>
            {errors.password && touched.password && (
              <span className={styles.error}>{errors.password}</span>
            )}
          </div>

          <div className="w-full">
            <input type="submit" value="Signup" className={styles.button} />
          </div>
        </div>
        <br />
        <h5 className="text-center pt-4 font-Poppins text-[14px]">
          Or join with
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle size={30} className="cursor-pointer mr-2" />
          <AiFillGithub size={30} className="cursor-pointer ml-2" />
        </div>
        <h5 className="text-center pt-4 font-Poppins text-[14px]">
          Already Registered?{" "}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Login")}
          >
            Login
          </span>
        </h5>
        <br />
      </form>
    </div>
  );
};

export default Signup;
