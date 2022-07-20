import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

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
          label: "Officer's Profile",
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
