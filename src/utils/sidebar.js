import SpeedIcon from "@mui/icons-material/Speed";
import PollIcon from "@mui/icons-material/Poll";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ChatIcon from "@mui/icons-material/Chat";
import PivotTableChartIcon from "@mui/icons-material/PivotTableChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PersonIcon from "@mui/icons-material/Person";

export const list1 = [
  {
    toLink: "dashboard",
    icon: SpeedIcon,
    name: "Dashboard",
  },
  {
    toLink: "analytics",
    icon: PollIcon,
    name: "Analytics",
  },
];

export const list2 = [
  {
    toLink: "statistics",
    icon: QueryStatsIcon,
    name: "Statistics",
  },
  {
    toLink: "data",
    icon: TextSnippetIcon,
    name: "Data",
  },
  {
    toLink: "chart",
    icon: AccountTreeIcon,
    name: "Chart",
  },
];

export const list3 = [
  {
    toLink: "users",
    icon: PersonIcon,
    name: "Users",
    accordion: true,
    accordionItems: [
      {
        toLink: "social-profile",
        name: "Social Profile",
        // icon: QueryStatsIcon,
        accordion: true,
        accordionItems: [
          {
            toLink: "profile-0",
            name: "Profile 0",
          },
          {
            toLink: "profile-1",
            name: "Profile 1",
          },
          {
            toLink: "profile-2",
            name: "Profile 2",
          },
        ],
      },
      {
        toLink: "account-profile",
        name: "Account Profile",
      },
      {
        toLink: "cards",
        name: "Cards",
      },
      {
        toLink: "list",
        name: "List",
      },
    ],
  },
  {
    toLink: "customer",
    icon: TextSnippetIcon,
    name: "Customer",
    accordion: false,
  },
  {
    toLink: "chat",
    icon: ChatIcon,
    name: "Chat",
    accordion: false,
  },
  {
    toLink: "kanban",
    icon: PivotTableChartIcon,
    name: "Kanban",
    accordion: false,
  },
  {
    toLink: "mail",
    icon: MailOutlineIcon,
    name: "Mail",
    accordion: false,
  },
  {
    toLink: "calender",
    icon: CalendarMonthIcon,
    name: "Calender",
    accordion: false,
  },
  {
    toLink: "contact",
    icon: ContactPhoneIcon,
    name: "Contact",
    accordion: true,
    accordionItems: [
      {
        toLink: "social-profile",
        name: "Social Profile",
      },
      {
        toLink: "account-profile",
        name: "Account Profile",
      },
      {
        toLink: "cards",
        name: "Cards",
      },
    ],
  },
  {
    toLink: "e-commerce",
    icon: ShoppingCartCheckoutIcon,
    name: "E-commerce",
    accordion: true,
    accordionItems: [
      {
        toLink: "social-profile",
        name: "Social Profile",
      },
      {
        toLink: "account-profile",
        name: "Account Profile",
      },
      {
        toLink: "cards",
        name: "Cards",
      },
      {
        toLink: "list",
        name: "List",
      },
    ],
  },
];

export const iconNames = [
  { icon: SpeedIcon, name: "Dashboard" },
  { icon: PollIcon, name: "Analytics" },
  { icon: QueryStatsIcon, name: "Statistics" },
  { icon: TextSnippetIcon, name: "Data" },
  { icon: AccountTreeIcon, name: "Chart" },
  { icon: ChatIcon, name: "Chat" },
  { icon: PivotTableChartIcon, name: "Kanban" },
  { icon: MailOutlineIcon, name: "Mail" },
  { icon: CalendarMonthIcon, name: "Calender" },
  { icon: ContactPhoneIcon, name: "Contact" },
  { icon: ShoppingCartCheckoutIcon, name: "E-commerce" },
  { icon: SpeedIcon, name: "Dashboard" },
  { icon: PollIcon, name: "Analytics" },
  { icon: QueryStatsIcon, name: "Statistics" },
  { icon: TextSnippetIcon, name: "Data" },
  { icon: AccountTreeIcon, name: "Chart" },
  { icon: ChatIcon, name: "Chat" },
  { icon: PivotTableChartIcon, name: "Kanban" },
  { icon: MailOutlineIcon, name: "Mail" },
  { icon: CalendarMonthIcon, name: "Calender" },
  { icon: ContactPhoneIcon, name: "Contact" },
  { icon: ShoppingCartCheckoutIcon, name: "E-commerce" },
];
