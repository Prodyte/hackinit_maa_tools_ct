
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Maps from "views/Maps/Maps.js";
import MusicUI from './components/MusicUI'
import YoutubeCanvas from './components/YouTube/YoutubeCanvas'

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
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/diet_plan",
    name: "Diet Plan",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/music",
    name: "Music",
    rtlName: "خرائط",
    icon: MusicNoteIcon,
    component: MusicUI,
    layout: "/admin"
  },
  {
    path: "/videos",
    name: "Videos",
    rtlName: "خرائط",
    icon: MusicNoteIcon,
    component: YoutubeCanvas,
    layout: "/admin"
  }
];

export default dashboardRoutes;
