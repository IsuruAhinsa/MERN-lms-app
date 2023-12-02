"use client";
import React from "react";
import AdminProtected from "../hooks/useAdminProtected";
import AdminSidebar from "../components/Admin/Sidebar/Sidebar";
import { useTheme } from "next-themes";
import DashboardHeader from "../components/Admin/DashboardHeader";

type Theme = "light" | "dark";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <div className="flex h-screen">
        <AdminSidebar
          theme={sidebarTheme}
          collapsed={collapsed}
          toggled={toggled}
          setToggled={setToggled}
          setBroken={setBroken}
        />
        <main className="w-full">
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
            <div className="dark:text-white text-black py-6">{children}</div>
          </div>
        </main>
      </div>
    </AdminProtected>
  );
}
