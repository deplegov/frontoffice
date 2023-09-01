/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

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
import { useEffect, useState } from "react";
import api from "utils/api";
import { MenuItem, Select } from "@mui/material";

function SignUpBasic() {
  // const [rememberMe, setRememberMe] = useState(false);

  // const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [message, setMessage] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [societies, setSocieties] = useState([]);
  const [society, setSociety] = useState("");
  const [isSociety, setIsSociety] = useState(false);

  useEffect(() => {
    getSocieties();
  }, []);

  const getSocieties = () => {
    setLoad(true);
    fetch(api("societies")).then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          setSocieties(res.societies);
          setLoad(false);
        });
      }
    });
  };

  const signup = () => {
    setLoading(true);
    fetch(api("users"), {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        nom,
        prenom,
        email,
        password,
        confirmPassword: password,
        role: "User",
        type: isSociety ? "Society" : "User",
        societe_id: society,
      }),
    }).then((res) => {
      if (res.ok)
        res.json().then(() => {
          setLoading(false);
          clearFields();
          window.location.href = "/pages/authentication/sign-in";
        });
      else {
        res.json().then((res) => {
          if (res) {
            setMessage(res.message + ", la création a échoué");
            setLoading(false);
          }
        });
      }
    });
  };

  const clearFields = () => {
    setNom("");
    setPrenom("");
    setEmail("");
    setPassword("");
    setIsSociety(false);
    setSociety("");
    setMessage("");
  };

  if (!load)
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
                    Inscription
                  </MKTypography>
                </MKBox>
                <MKBox pt={4} pb={3} px={3}>
                  <MKBox component="form" role="form">
                    <MKBox mb={2} style={{ display: "flex", gap: "10px" }}>
                      <MKInput
                        type="text"
                        label="Nom"
                        onChange={(e) => setNom(e.target.value)}
                        value={nom}
                      />
                      <MKInput
                        type="text"
                        label="Prénom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                      />
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput
                        type="text"
                        label="Email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput
                        type="password"
                        label="Mot de passe"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </MKBox>
                    <Grid item>
                      <MKTypography variant="body2" color="text">
                        Compte société
                      </MKTypography>
                      <MKInput
                        type="checkbox"
                        fullWidth
                        checked={isSociety}
                        onChange={() => setIsSociety(!isSociety)}
                      />
                    </Grid>
                    {isSociety && (
                      <Grid item>
                        <MKTypography variant="body2" color="text">
                          Société
                        </MKTypography>
                        <Select value={society} onChange={(e) => setSociety(e.target.value)}>
                          {societies &&
                            societies.map((s, i) => (
                              <MenuItem key={i} value={s._id}>
                                {`${s.name}`}
                              </MenuItem>
                            ))}
                        </Select>
                      </Grid>
                    )}
                    {message !== "" && (
                      <MKBox mb={2}>
                        <p style={{ color: "red" }}>{message}</p>
                      </MKBox>
                    )}
                    <MKBox mt={4} mb={1}>
                      <MKButton
                        variant="gradient"
                        color="info"
                        fullWidth
                        disabled={loading}
                        onClick={signup}
                      >
                        S&apos;inscrire
                      </MKButton>
                    </MKBox>
                    <MKBox mt={3} mb={1} textAlign="center">
                      <MKTypography variant="button" color="text">
                        A déja un compte?{" "}
                        <MKTypography
                          component={Link}
                          to="/pages/authentication/sign-in"
                          variant="button"
                          color="info"
                          fontWeight="medium"
                          textGradient
                        >
                          Se connecter
                        </MKTypography>
                      </MKTypography>
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
      </>
    );
  else return <></>;
}

export default SignUpBasic;
