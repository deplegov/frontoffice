import React, { useEffect, useState } from "react";
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
import api from "utils/api";

export default function UpdateInformation() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    setLoading(true);
    const userSess = JSON.parse(sessionStorage.getItem("user"));
    fetch(api(`users/${userSess.ID}`)).then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          setUser(res);
          setNom(res.NOM);
          setPrenom(res.PRENOM);
          setEmail(res.EMAIL);
          setLoading(false);
        });
      }
    });
  };

  const updateUser = () => {
    setPending(true);
    fetch(api(`users/${user.ID}`), {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({
        nom,
        prenom,
        email,
      }),
    }).then((res) => {
      if (res.ok)
        res.json().then(() => {
          fetch(api(`users/${user.ID}`)).then((res) => {
            if (res.ok) {
              res.json().then((res) => {
                delete res.PASSWORD;
                sessionStorage.setItem("user", JSON.stringify(res));
                setPending(false);
              });
            }
          });
        });
    });
  };

  if (!loading)
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
                      window.location.href = "/pages/Account/Parameter";
                    }}
                  >
                    Retour
                  </MKButton>
                </MKBox>
                <MKBox pt={4} pb={3} px={3}>
                  <MKBox component="form" role="form">
                    <MKBox mb={2} style={{ display: "flex", gap: "10px" }}>
                      <MKInput
                        type="text"
                        label="Nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                      />
                      <MKInput
                        type="text"
                        label="Prénom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                      />
                    </MKBox>
                    <MKBox mb={2} style={{ display: "flex", gap: "10px" }}>
                      <MKInput
                        type="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </MKBox>
                    <MKBox mt={4} mb={1}>
                      <MKButton
                        variant="gradient"
                        color="info"
                        fullWidth
                        onClick={updateUser}
                        disabled={pending}
                      >
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
  else return <></>;
}
