"use client";
import React, { FC } from "react";
import {
  MenuItemStyles,
  menuClasses,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { Badge } from "./Badge";
import { Typography } from "./Typography";
import {
  IoHome,
  IoPeopleSharp,
  IoReader,
  IoAddCircle,
  IoFilm,
  IoNewspaperSharp,
  IoPeopleCircle,
  IoFileTrayFull,
  IoChatboxEllipses,
  IoBarChart,
  IoMap,
  IoFootsteps,
  IoSettings,
  IoLogOut,
} from "./Icons";
import { SidebarHeader } from "./SidebarHeader";
import Link from "next/link";

type Props = {
  theme: string;
  collapsed: boolean;
  toggled: boolean;
  setToggled: (toggled: boolean) => void;
  setBroken: (broken: boolean) => void;
};

const themes: any = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const AdminSidebar: FC<Props> = ({
  theme,
  collapsed,
  toggled,
  setToggled,
  setBroken,
}) => {
  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "15px",
      fontWeight: 600,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes[theme].menu.menuContent, 1)
          : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, 1),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      onBackdropClick={() => setToggled(false)}
      onBreakPoint={setBroken}
      image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
      breakPoint="md"
      backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, 1)}
      rootStyles={{
        color: themes[theme].sidebar.color,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <SidebarHeader style={{ marginTop: "16px" }} />

        <div style={{ flex: 1, marginBottom: "32px" }}>
          <div style={{ padding: "0 24px", marginBottom: "8px" }}>
            <Typography
              variant="body2"
              fontWeight={600}
              style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
            >
              General
            </Typography>
          </div>
          <Menu menuItemStyles={menuItemStyles}>
            <MenuItem component={<Link href="/admin" />} icon={<IoHome />}>
              Dashboard
            </MenuItem>
          </Menu>

          <Menu menuItemStyles={menuItemStyles}>
            <SubMenu label="Data">
              <MenuItem icon={<IoPeopleSharp />}>Users</MenuItem>
              <MenuItem icon={<IoReader />}> Invoices</MenuItem>
            </SubMenu>
            <SubMenu label="Content">
              <MenuItem
                component={<Link href="/admin/create-course" />}
                icon={<IoAddCircle />}
              >
                Create Courses
              </MenuItem>
              <MenuItem
                component={<Link href="/admin/all-courses" />}
                icon={<IoFilm />}
              >
                Live Courses
              </MenuItem>
            </SubMenu>
            <SubMenu label="Customization">
              <MenuItem icon={<IoNewspaperSharp />}>Hero</MenuItem>
              <MenuItem icon={<IoChatboxEllipses />}> FAQ</MenuItem>
              <MenuItem icon={<IoFileTrayFull />}> Categories</MenuItem>
            </SubMenu>
            <SubMenu label="Controllers">
              <MenuItem icon={<IoPeopleCircle />}> Manage Team</MenuItem>
            </SubMenu>
            <SubMenu label="Analytics" icon={<IoFootsteps />}>
              <MenuItem icon={<IoBarChart />}> Course Analytics</MenuItem>
              <MenuItem icon={<IoMap />}> Order Analytics</MenuItem>
              <MenuItem icon={<IoFootsteps />}> User Analytics</MenuItem>
            </SubMenu>
          </Menu>

          <div
            style={{
              padding: "0 24px",
              marginBottom: "8px",
              marginTop: "32px",
            }}
          >
            <Typography
              variant="body2"
              fontWeight={600}
              style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
            >
              Extra
            </Typography>
          </div>

          <Menu menuItemStyles={menuItemStyles}>
            <MenuItem icon={<IoSettings />}>Settings</MenuItem>
            <MenuItem icon={<IoLogOut />}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </Sidebar>
  );
};

export default AdminSidebar;
