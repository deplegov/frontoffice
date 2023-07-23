// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import SignIn from "layouts/pages/authentication/sign-in";
import SignUp from "layouts/pages/authentication/sign-up";
import TermsOfUs from "pages/TermsOfUs";
import PrivacyPolicy from "pages/PrivacyTerms";
import Submission from "pages/CallForTenders/Submission";
import Profile from "pages/Account/Profile";
import PageDetail from "pages/Details/PageDetail";
import CallForTenders from "pages/CallForTenders/page";
import PageDetailCallForTenders from "pages/Details/PageDetailCallForTenders";
import Parameter from "pages/Account/Parameter";
import UpdateInformation from "pages/Account/UpdateInformation";

const routes = [
  {
    name: "Appels d'offre",
    route: "/pages/landing-pages/about-us",
    component: <AboutUs />,
  },

  {
    name: "about us",
    route: "/pages/landing-pages/about-us",
    component: <AboutUs />,
  },
  {
    name: "contact us",
    route: "/pages/landing-pages/contact-us",
    component: <ContactUs />,
  },
  {
    name: "sign in",
    route: "/pages/authentication/sign-in",
    component: <SignIn />,
  },
  {
    name: "sign up",
    route: "/pages/authentication/sign-up",
    component: <SignUp />,
  },
  {
    name: "PrivacyPolicy",
    route: "/pages/PrivacyTerms",
    component: <PrivacyPolicy />,
  },
  {
    name: "TermsOfUs",
    route: "/pages/TermsOfUs",
    component: <TermsOfUs />,
  },
  {
    name: "Submission offer",
    route: "/pages/CallForTenders/Submission",
    component: <Submission />,
  },
  {
    name: "Call for tender",
    route: "/pages/CallForTenders/page",
    component: <CallForTenders />,
  },
  {
    name: "Profile",
    route: "/pages/Account/Profile",
    component: <Profile />,
  },
  {
    name: "Details page",
    route: "/pages/Details/PageDetail",
    component: <PageDetail />,
  },
  {
    name: "Details page call for tenders",
    route: "/pages/Details/PageDetailCallForTenders",
    component: <PageDetailCallForTenders />,
  },
  {
    name: "Parameter",
    route: "/pages/Account/Parameter",
    component: <Parameter />,
  },
  {
    name: "Update informations",
    route: "/pages/Account/UpdateInformation",
    component: <UpdateInformation />,
  },
];

export default routes;
