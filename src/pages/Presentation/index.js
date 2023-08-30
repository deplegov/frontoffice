// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import data from "pages/Presentation/sections/data/designBlocksData";

// Routes
// import headerDropdown from "headerDropdown";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";
import NavBarInitialDefault from "components/NavBarInitialDefault";
import { useEffect, useState } from "react";
import api from "utils/api";

function Presentation() {
  // eslint-disable-next-line no-unused-vars
  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getActualites();
  }, []);

  const getDesignBlockData = () => {
    return [
      {
        title: "Actualités",
        description: "Actualité du gouvernement",
        items: actualites.map((actu) => {
          return {
            name: actu.TITRE,
            detail: actu.DESCRIPTION,
            route: `/actualite/${actu.ID}`,
          };
        }),
      },
    ];
  };

  const getActualites = () => {
    setLoading(true);
    fetch(api("articles")).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          setActualites(data);
          setLoading(false);
        });
      }
    });
  };

  return (
    <>
      <NavBarInitialDefault />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              E - Gouvernance{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Actualités &amp; projets du gouvernement et appels d&apos;offre publique
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {!loading && <DesignBlocks data={getDesignBlockData()} page="Home" />}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
