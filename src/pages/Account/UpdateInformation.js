import React from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBarInitialDefault from "components/NavBarInitialDefault";
import bgImage from "assets/images/bg-presentation.jpg";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import Card from "@mui/material/Card";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function UpdateInformation() {
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
              Modification des informations
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKButton
                  variant="gradient"
                  color="info"
                  size="small"
                  startIcon={<ArrowBackIcon />}
                  onClick={() => {
                    // Handle the back button click here
                    // For example, you can use react-router's history.goBack() method
                    // to go back to the previous page.
                    // Example: history.goBack();
                  }}
                >
                  Retour
                </MKButton>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2} style={{ display: "flex", gap: "10px" }}>
                    <MKInput type="text" label="Nom" />
                    <MKInput type="text" label="Prénom" />
                  </MKBox>

                  <MKBox mb={2}>
                    <MKInput
                      variant="standard"
                      label="Date de naissance"
                      InputLabelProps={{ shrink: true }}
                      type="date"
                      fullWidth
                    />
                  </MKBox>
                  <MKBox
                    mb={2}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20%",
                      justifyContent: "center",
                    }}
                  >
                    <label style={{ display: "flex", alignItems: "center" }}>
                      <MKInput type="radio" name="gender" />
                      <span style={{ marginLeft: "5px", fontSize: "14px", opacity: "7.1" }}>
                        Homme
                      </span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center" }}>
                      <MKInput type="radio" name="gender" />
                      <span style={{ marginLeft: "5px", fontSize: "14px", opacity: "7.1" }}>
                        Femme
                      </span>
                    </label>
                  </MKBox>
                  <MKBox mb={2} style={{ display: "flex", gap: "10px" }}>
                    <MKInput type="text" label="Adresse" />
                    <MKInput type="number" label="Code postal" />
                  </MKBox>
                  <MKBox mb={2} style={{ display: "flex", gap: "10px" }}>
                    <MKInput type="email" label="Email" />
                    <MKInput type="number" label="Numero de téléphone" />
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth>
                      Modifier
                    </MKButton>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
