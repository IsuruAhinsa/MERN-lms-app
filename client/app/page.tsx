"use client";
import React, { FC, useState } from "react";
import Heading from "@/app/utils/heading";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Route/Hero";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title={"ELearning"}
        description={
          "ELearning is a platform for students to learn and get help from teachers"
        }
        keywords={"Programming, MERN, Redux, Machine Learning"}
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
    </div>
  );
};
export default Page;
