// @mui material components
import Icon from "@mui/material/Icon";
import Submission from "pages/CallForTenders/Submission";
import CallForTenders from "pages/CallForTenders/page";

// Pages
import AboutUs from "pages/LandingPages/AboutUs";
import ContactUs from "pages/LandingPages/ContactUs";
import SignIn from "pages/authentication/SignIn";
import SignUp from "pages/authentication/SignUp";

const headerDropdown = [
  {
    name: "menu",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "section",
        collapse: [
          {
            name: "Appels d'offre",
            route: "/pages/CallForTenders/page",
            component: <CallForTenders />,
          },
          {
            name: "Soumission appel d'offre",
            route: "/pages/CallForTenders/Submission",
            component: <Submission />,
          },
        ],
      },
      {
        name: "us",
        collapse: [
          {
            name: "about us",
            route: "/pages/LandingPages/AboutUs",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/LandingPages/ContactUs",
            component: <ContactUs />,
          },
        ],
      },
      {
        name: "compte",
        collapse: [
          {
            name: "Se connecter",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
          {
            name: "S'inscrire",
            route: "/pages/authentication/sign-up",
            component: <SignUp />,
          },
        ],
      },
    ],
  },
];

export default headerDropdown;
