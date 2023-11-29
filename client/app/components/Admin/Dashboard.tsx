"use client";
import React, { FC } from "react";
import DashboardHeader from "./DashboardHeader";

type Props = {
  handleThemeChange: any;
  setToggled: (toggled: boolean) => void;
  setCollapsed: (collapsed: boolean) => void;
  broken: boolean;
  toggled: boolean;
  collapsed: boolean;
  sidebarTheme: string;
};

const Dashboard: FC<Props> = ({
  handleThemeChange,
  setToggled,
  broken,
  toggled,
  collapsed,
  setCollapsed,
  sidebarTheme,
}) => {
  return (
    <main>
      <div style={{ padding: "16px 24px", color: "#44596e" }}>
        <DashboardHeader
          handleThemeChange={handleThemeChange}
          setToggled={setToggled}
          broken={broken}
          toggled={toggled}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          sidebarTheme={sidebarTheme}
        />
        <div className="dark:text-white text-black py-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          minus, quam neque voluptatem eligendi quos a suscipit adipisci
          inventore nisi, veritatis itaque. Sint beatae pariatur, commodi
          quisquam dolor accusantium maiores.
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
