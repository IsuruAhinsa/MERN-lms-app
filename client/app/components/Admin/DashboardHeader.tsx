import React, { FC } from "react";
import { Switch } from "@/app/components/Admin/Sidebar/Switch";
import { IoMenu } from "@/app/components/Admin/Sidebar/Icons";

type Props = {
  handleThemeChange: any;
  setToggled: (toggled: boolean) => void;
  setCollapsed: (collapsed: boolean) => void;
  broken: boolean;
  toggled: boolean;
  collapsed: boolean;
  sidebarTheme: string;
};

const DashboardHeader: FC<Props> = ({
  handleThemeChange,
  setToggled,
  broken,
  toggled,
  collapsed,
  setCollapsed,
  sidebarTheme,
}) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div className="flex">
        {broken && (
          <IoMenu
            className="mr-4 hover:bg-gray-200 rounded-full p-2"
            onClick={() => setToggled(!toggled)}
            size={40}
          />
        )}

        <Switch
          id="sidebarTheme"
          checked={sidebarTheme === "dark"}
          onChange={handleThemeChange}
          label="Dark Theme"
        />

        <Switch
          id="collapse"
          checked={collapsed}
          onChange={() => setCollapsed(!collapsed)}
          label="Collapse"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
