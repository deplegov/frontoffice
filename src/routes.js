// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import SignIn from "layouts/pages/authentication/sign-in";
import SignUp from "layouts/pages/authentication/sign-up";
import Terms from "pages/Terms/Terms";

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
    name: "terms",
    route: "/pages/Terms/Terms",
    component: <Terms />,
  },
];

export default routes;
