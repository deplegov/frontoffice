/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Actualités",
    description: "Actualité du gouvernement",
    items: [
      {
        name: "Titre de l'actualité",
        detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet diam nec justo finibus dictum.
        Vivamus vitae interdum quam, sit amet scelerisque purus. Nam ultricies sollicitudin gravida.
        Duis a efficitur sapien. Suspendisse ac laoreet purus.`,
        route: "/pages/Details/PageDetail",
      },
      // {
      //   name: "Actualité 1",
      //   detail: "bref details",
      //   route: "/sections/page-sections/page-headers",
      // },
      {
        image: `${imagesPrefix}/features.jpg`,
        name: "Features",
        count: 14,
        route: "/pages/Details/PageDetail",
      },
      {
        image: `${imagesPrefix}/pricing.jpg`,
        name: "Pricing",
        count: 8,
        route: "/pages/Details/PageDetail",
      },
      {
        name: "Titre de l'actualité",
        detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet diam nec justo finibus dictum.
        Vivamus vitae interdum quam, sit amet scelerisque purus. Nam ultricies sollicitudin gravida.
        Duis a efficitur sapien. Suspendisse ac laoreet purus.`,
        route: "/pages/Details/PageDetail",
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
        name: "FAQ",
        count: 1,
        route: "/pages/Details/PageDetail",
      },
      {
        image: `${imagesPrefix}/blogs.jpg`,
        name: "Blog Posts",
        count: 11,
        route: "/pages/Details/PageDetail",
      },
      {
        image: `${imagesPrefix}/testimonials.jpg`,
        name: "Testimonials",
        count: 11,
        route: "/pages/Details/PageDetail",
      },
      {
        name: "Titre de l'actualité",
        detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet diam nec justo finibus dictum.
        Vivamus vitae interdum quam, sit amet scelerisque purus. Nam ultricies sollicitudin gravida.
        Duis a efficitur sapien. Suspendisse ac laoreet purus.`,
        route: "/pages/Details/PageDetail",
      },
    ],
  },
  {
    title: "Communiqués de presse",
    description: "Les communiqués de presse du gouvernement",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "Navbars",
        count: 4,
        route: "/pages/Details/PageDetail",
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        name: "Nav Tabs",
        count: 2,
        route: "/pages/Details/PageDetail",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Pagination",
        count: 3,
        route: "/pages/Details/PageDetail",
      },
    ],
  },
  {
    title: "Evenements",
    description: "Les évenements du gouvernement",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        name: "Newsletters",
        count: 6,
        route: "/pages/Details/PageDetail",
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        name: "Contact Sections",
        count: 8,
        route: "/pages/Details/PageDetail",
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        name: "Forms",
        count: 3,
        route: "/pages/Details/PageDetail",
      },
      {
        image: `${imagesPrefix}/inputs.jpg`,
        name: "Inputs",
        count: 6,
        route: "/pages/Details/PageDetail",
      },
    ],
  },
];
