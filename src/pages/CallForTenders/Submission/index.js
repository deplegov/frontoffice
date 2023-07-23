import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
// import MuiLink from "@mui/material/Link";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import headerDropdown from "headerDropdown";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Submission() {
  const [entreprise, setEntreprise] = useState("");
  const [montant, setMontant] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can handle the form submission logic, e.g., sending data to the server.
    console.log("Entreprise:", entreprise);
    console.log("Montant:", montant);
    console.log("Description:", description);
    // Reset form fields after submission
    setEntreprise("");
    setMontant("");
    setDescription("");
  };

  return (
    <>
      <DefaultNavbar
        routes={headerDropdown}
        action={{
          type: "internal",
          route: "/pages/Account/Profile",
          label: "Mon compte",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
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
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Soumission d&apos;appel d&apos;Offre
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="text" label="Nom de l'entreprise" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      variant="standard"
                      label="Date limit de l'offre"
                      InputLabelProps={{ shrink: true }}
                      type="date"
                      fullWidth
                    />
                  </MKBox>

                  <MKBox mb={2}>
                    <MKInput label="Description..." multiline rows={5} fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="file" fullWidth />
                  </MKBox>

                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth>
                      Valider
                    </MKButton>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="entreprise">Entreprise:</label>
            <input
              type="text"
              id="entreprise"
              value={entreprise}
              onChange={(e) => setEntreprise(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="montant">Montant:</label>
            <input
              type="number"
              id="montant"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit">Soumettre</button>
        </form>
      </div>
    </>
  );
}

export default Submission;
