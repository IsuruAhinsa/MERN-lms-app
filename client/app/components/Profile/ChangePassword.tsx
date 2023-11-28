"use client";
import React, { FC, useEffect, useState } from "react";
import { styles } from "@/app/styles/styles";
import { useChangePasswordMutation } from "@/redux/features/user/userApi";
import { toast } from "react-hot-toast";

type Props = {
  user: any;
};

const ChangePassword: FC<Props> = (user) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePassword, { isSuccess, error }] = useChangePasswordMutation();
  const passwordChangeHandler = async (e: any) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      await changePassword({
        oldPassword: currentPassword,
        newPassword: confirmPassword,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password Changed!");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  return (
    <>
      <div className="w-full pl-6 800px:pl-10">
        <form onSubmit={passwordChangeHandler}>
          <div className="800px:w-[50%] m-auto block pb-4">
            <h3 className="font-Poppins text-2xl mb-3">Change Password</h3>
            <div className="w-full">
              <label htmlFor="" className="block pb-2">
                Current Password
              </label>
              <input
                type="password"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>

            <div className="w-full mt-2">
              <label htmlFor="" className="block pb-2">
                New Password
              </label>
              <input
                type="password"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0 italic`}
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="w-full mt-2">
              <label htmlFor="" className="block pb-2">
                Re-enter New Password
              </label>
              <input
                type="password"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0 italic`}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              className={`w-full 800px:w-[95%] h-[40px] border border-[#37a39a] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer hover:bg-[#37a39a]`}
              value={"Update Password"}
              required
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
