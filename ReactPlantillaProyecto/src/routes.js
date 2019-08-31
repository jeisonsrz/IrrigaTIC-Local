import React from "react";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
// import Typography from "views/Typography/Typography.jsx";
// import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import Productos from "./views/Mongodb/Productos";
import NuevoProducto from "./views/Mongodb/NuevoProducto";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
// // core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.jsx";
import Register from './components/Register';
import Firebase from './components/Firebase';
import { Link } from 'react-router-dom';



const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Perfil Usuario",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Monitoreo Modulos",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  {
    path: "/maps",
    name: "Ubicacion Modulo",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "ALARMAS CULTIVO 📣",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/mongodb",
    name: "MongoDB",
    rtlName: "إخطارات",
    icon: 'adb',
    component: Productos,
    layout: "/admin"
  },
  {
    path: "/productos/nuevo",
    name: "Nuevo Producto",
    rtlName: "إخطارات",
    icon: 'adb',
    component: NuevoProducto,
    layout: "/admin"
  },
  {
    path: "/register",
    name: "Registro CLIENTE",
    rtlName: "إخطارات",
    icon: 'adb',
    component: Register,
    layout: "/admin"
  },

  {
    path: "/firebase",
    name: "FIREBASE IOT",
    rtlName: "إخطارات",
    icon: 'adb',
    component: Firebase,
    layout: "/admin"
  },


  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // },
  // 
];

export default dashboardRoutes;
