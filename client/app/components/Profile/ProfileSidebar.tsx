"use client";
import React, { FC } from "react";
import Image from "next/image";
import avatarDefault from "@/public/assets/avatar.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuBookMinus } from "react-icons/lu";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Link from "next/link";

type Props = {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (active: number) => void;
  logoutHandler: any;
};

const ProfileSidebar: FC<Props> = ({
  user,
  active,
  avatar,
  setActive,
  logoutHandler,
}) => {
  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer rounded-t-[5px] ${active === 1 ? "dark:bg-slate-800 bg-gray-200" : "bg-transparent"
          }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={
            user.avatar || avatar ? user.avatar.url || avatar : avatarDefault
          }
          alt={user.avatar}
          height={20}
          width={20}
          className="w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full"
        />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          My Account
        </h5>
      </div>

      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 2 ? "dark:bg-slate-800" : "bg-transparent"
          }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine size={20} className="dark:text-white text-black" />
        <h5 className="pl-2 800px:block hidden">Change Password</h5>
      </div>

      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 3 ? "dark:bg-slate-800" : "bg-transparent"
          }`}
        onClick={() => setActive(3)}
      >
        <LuBookMinus size={20} className="dark:text-white text-black" />
        <h5 className="pl-2 800px:block hidden">Enrolled Courses</h5>
      </div>

      {user.role === "admin" && (
        <Link
          className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 5 ? "dark:bg-slate-800" : "bg-transparent"
            }`}
          href="/admin"
        >
          <MdOutlineAdminPanelSettings size={20} className="dark:text-white text-black" />
          <h5 className="pl-2 800px:block hidden">Admin Dashboard</h5>
        </Link>
      )}

      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 4 ? "dark:bg-red-500 dark:bg-opacity-20" : "bg-transparent"
          }`}
        onClick={() => logoutHandler()}
      >
        <AiOutlineLogout size={20} className="text-red-500" />
        <h5 className="pl-2 800px:block hidden text-red-500">Log out</h5>
      </div>
    </div>
  );
};

export default ProfileSidebar;
