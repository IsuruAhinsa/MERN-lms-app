import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineCamera } from "react-icons/ai";
import { styles } from "@/app/styles/styles";
import avatarIcon from "@/public/assets/avatar.png";
import {
  useEditProfileMutation,
  useUpdateAvatarMutation,
} from "@/redux/features/user/userApi";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { toast } from "react-hot-toast";

type Props = {
  avatar: string | null;
  user: any;
};

const ProfileInfo: FC<Props> = ({ avatar, user }) => {
  const [name, setName] = useState(user && user.name);
  const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();
  const [editProfile, { isSuccess: success, error: updateError }] =
    useEditProfileMutation();
  const [loadUser, setLoadUser] = useState(false);
  useLoadUserQuery(undefined, { skip: !loadUser });

  const imageHandler = async (e: any) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        const avatar = fileReader.result;
        updateAvatar({
          avatar,
        });
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (isSuccess || success) {
      setLoadUser(true);
      toast.success("Profile Updated Successfully!");
    }

    if (error || updateError) {
      console.log(error);
    }
  }, [isSuccess, success, updateError]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (name !== "") {
      await editProfile({
        name: name,
      });
    }
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="relative">
          <Image
            src={user.avatar || avatar ? user.avatar.url || avatar : avatarIcon}
            alt={user.avatar}
            className="w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full"
            width={120}
            height={120}
          />
          <input
            type="file"
            name="avatar"
            id="avatar"
            className="hidden"
            onChange={imageHandler}
            accept="image/png,image/jpg,image/jpeg,image/webp"
          />
          <label htmlFor="avatar">
            <div className="w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
              <AiOutlineCamera size={20} className="z-1" />
            </div>
          </label>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full pl-6 800px:pl-10">
        <form onSubmit={handleSubmit}>
          <div className="800px:w-[50%] m-auto block pb-4">
            <div className="w-full">
              <label htmlFor="" className="block pb-2">
                Full Name
              </label>
              <input
                type="text"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="w-full mt-2">
              <label htmlFor="" className="block pb-2">
                Email Address
              </label>
              <input
                type="email"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0 italic`}
                required
                readOnly
                disabled
                value={user?.email}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <input
              type="submit"
              className={`w-full 800px:w-[95%] h-[40px] border border-[#37a39a] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer hover:bg-[#37a39a]`}
              value={"Update"}
              required
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileInfo;
