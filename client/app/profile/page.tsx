"use client"
import React, { FC, useState } from "react";
import Protected from "@/app/hooks/useProtected";
import Heading from "@/app/utils/heading";
import Header from "@/app/components/Header";
import Profile from "@/app/components/Profile/Profile";
import { useSelector } from "react-redux";

type Props = {};

const Page: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div className="h-screen">
      <Protected>
        <Heading
          title={`${user?.name}'s profile`}
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
        <Profile user={user} />
      </Protected>
    </div>
  );
};

export default Page;
