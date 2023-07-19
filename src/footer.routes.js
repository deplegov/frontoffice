// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Logo test",
    image: logoCT,
    route: "/",
  },

  menus: [
    {
      name: "company",
      items: [{ name: "about us", route: "/pages/LandingPages/AboutUs" }],
    },
    {
      name: "resources",
      items: [{ name: "Appels d'offre", route: "/pages/LandingPages/AboutUs" }],
    },
    {
      name: "help & support",
      items: [{ name: "contact us", route: "/pages/LandingPages/ContactUs" }],
    },
    {
      name: "legal",
      items: [
        {
          name: " Politique de confidentialité et condition d'utilisation",
          route: "/pages/LandingPages/Terms",
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        E-Gouvernance
      </MKTypography>
      .
    </MKTypography>
  ),
};
