import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from "@mui/icons-material/Logout"

const menus = {
  user: {
    header: "User Dashboard",
    nSections: 2,
    sectionList: [
      [
        {
          label: "All Reported Children",
          Icon: FormatListNumberedIcon,
        },
        {
          label: "User Profile",
          Icon: AccountCircleIcon,
        },
      ],
      [
        {
          label: "Settings",
          Icon: SettingsIcon,
        },
      ],
    ],
  },
  nodal: {
    header: "Nodal Officer's Dashboard",
    nSections: 2,
    sectionList: [
      [
        {
          label: "Dashboard",
          Icon: DashboardIcon,
          link: '/admin/'
        },
      ],
      [
        {
          label: "Officer's Profile",
          Icon: AccountCircleIcon,
          link: '/admin/profile'
        },
        {
          label: "Logout",
          Icon: LogoutIcon,
          link: '/logout'
        },
      ],
    ],
  },
  ngo: {
    header: "NGO Dashboard",
    nSections: 2,
    sectionList: [
      {
        label: "",
        Icon: "",
      },
    ],
  },
};

export default menus;
