import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as VsIcons from "react-icons/vsc"

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Legder',
    path: '/legder',
    icon: <AiIcons.AiOutlineDollarCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Activity',
    path: '/activity',
    icon: <FaIcons.FaChartBar />,
    cName: 'nav-text'
  },
  {
    title: 'Family',
    path: '/family',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Account Info',
    path: '/account',
    icon: <VsIcons.VscAccount />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];