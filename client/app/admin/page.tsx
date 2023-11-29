"use client";
import React from "react";
import Heading from "../utils/heading";
import AdminSidebar from "../components/Admin/Sidebar/Sidebar";
import AdminProtected from "../hooks/useAdminProtected";
import { useTheme } from "next-themes";
import Dashboard from "../components/Admin/Dashboard";

type Props = {};

type Theme = "light" | "dark";

const Page = (props: Props) => {
  const [broken, setBroken] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [sidebarTheme, setSidebarTheme] = React.useState<Theme>("light");
  const { setTheme } = useTheme();

  // handle on sidebarTheme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSidebarTheme(e.target.checked ? "dark" : "light");
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <AdminProtected>
      <Heading
        title="ELearning - Admin"
        description="ELearning is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Redux, Machine Learning"
      />

      <div className="flex h-screen">
        <AdminSidebar
          theme={sidebarTheme}
          collapsed={collapsed}
          toggled={toggled}
          setToggled={setToggled}
          setBroken={setBroken}
        />
        <Dashboard
          handleThemeChange={handleThemeChange}
          setToggled={setToggled}
          broken={broken}
          toggled={toggled}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          sidebarTheme={sidebarTheme}
        />
      </div>
    </AdminProtected>
  );
};

export default Page;
