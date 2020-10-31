import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as VsIcons from "react-icons/vsc";

export const SidebarData = [
  {
    title: "Home",
    path: "/NavBar/Dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Legder",
    path: "/NavBar/ledger",
    icon: <AiIcons.AiOutlineDollarCircle />,
    cName: "nav-text",
  },
  {
    title: "Activity",
    path: "/NavBar/activity",
    icon: <FaIcons.FaChartBar />,
    cName: "nav-text",
  },
  {
    title: "Family",
    path: "/family",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Account Info",
    path: "/NavBar/Account",
    icon: <VsIcons.VscAccount />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/NavBar/Support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
