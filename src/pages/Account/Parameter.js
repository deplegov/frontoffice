import React from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBarInitialDefault from "components/NavBarInitialDefault";
import bgImage from "assets/images/bg-presentation.jpg";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function Parameter() {
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid container justifyContent="center" alignItems="center">
            <MKTypography variant="h1" color="white" mt={-6} mb={1} textAlign="center">
              Paramètres du Compte
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Link to="/pages/Account/UpdateInformation">
                <MKTypography variant="h4" mb={2} textAlign="center">
                  Modification des informations
                </MKTypography>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Link to="/preferences-communications">
                <MKTypography variant="h4" mb={2} textAlign="center">
                  Préférences de communications
                </MKTypography>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Link to="/securite-compte">
                <MKTypography variant="h4" mb={2} textAlign="center">
                  Sécurité du compte
                </MKTypography>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
