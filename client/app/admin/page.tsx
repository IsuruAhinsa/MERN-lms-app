"use client";
import React from "react";
import Heading from "../utils/heading";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Heading
        title="ELearning - Admin"
        description="ELearning is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Redux, Machine Learning"
      />

      <div className="text-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        perspiciatis. Aliquid, omnis perspiciatis unde earum illo aliquam ea
        minus saepe. Deleniti vero ut aspernatur molestias itaque rerum maxime
        quaerat repudiandae?
      </div>
    </>
  );
};

export default Page;
