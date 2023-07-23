import React from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBarInitialDefault from "components/NavBarInitialDefault";
import bgImage from "assets/images/bg-presentation.jpg";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import MKPagination from "components/MKPagination";
import { Icon, Paper, Button } from "@mui/material";
import PropTypes from "prop-types";

PageDetailCallForTenders.propTypes = {
  page: PropTypes.string,
};

export default function PageDetailCallForTenders() {
  const callForTenderDetails = {
    title: "Titre de l'appel d'offre",
    missions: [
      "Mission 1",
      "Mission 2",
      "Mission 3",
      // Add more mission items as needed
    ],
    requiredProfiles: [
      "Profile 1",
      "Profile 2",
      "Profile 3",
      // Add more profile items as needed
    ],
    companyName: "Nom de la société...",
    description:
      "Description de l'appel d'offre. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet diam nec justo finibus dictum. Vivamus vitae interdum quam, sit amet scelerisque purus. Nam ultricies sollicitudin gravida. Duis a efficitur sapien. Suspendisse ac laoreet purus...",
  };
  const handleDownloadDocument = () => {
    // Replace with the logic to download the document
    // For example, you can use the 'window.open' method to download the file.
    // Example: window.open('/path/to/document.pdf', '_blank');
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid container justifyContent="center" alignItems="center">
            <MKTypography variant="h1" color="white" mt={-6} mb={1}>
              {callForTenderDetails.title}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={0}>
            <Button variant="contained" color="black" onClick={handleDownloadDocument}>
              Télécharger le document
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <MKTypography variant="h4" mb={2}>
                Nom de la Société
              </MKTypography>
              <MKTypography variant="body1" mb={2}>
                {callForTenderDetails.companyName}
              </MKTypography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <MKTypography variant="h4" mb={2}>
                Mission
              </MKTypography>

              {callForTenderDetails.missions.map((mission, index) => (
                <ul key={index}>
                  <li>
                    <h5>{mission}</h5>
                  </li>
                </ul>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <MKTypography variant="h4" mb={2}>
                Profil Requis
              </MKTypography>

              {callForTenderDetails.requiredProfiles.map((profile, index) => (
                <ul key={index}>
                  <li>
                    <h5>{profile}</h5>
                  </li>
                </ul>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <MKTypography variant="h4" mb={2}>
                Description et condition
              </MKTypography>
              <MKTypography variant="body1" mb={2}>
                {callForTenderDetails.description}
              </MKTypography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <MKTypography variant="h4" mb={2}>
                Instructions de soumission
              </MKTypography>
              <MKTypography variant="body1" mb={2}>
                {callForTenderDetails.description}
              </MKTypography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ height: "100%" }}>
        <Grid container item justifyContent="center" xs={12} lg={6} mx="auto" height="100%">
          <MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_left</Icon>
            </MKPagination>
            <MKPagination item active>
              1
            </MKPagination>
            <MKPagination item>2</MKPagination>
            <MKPagination item>3</MKPagination>
            <MKPagination item>4</MKPagination>
            <MKPagination item>5</MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_right</Icon>
            </MKPagination>
          </MKPagination>
        </Grid>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
