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

// @mui material components>
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/bruce-mars.jpg";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import headerDropdown from "headerDropdown";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "utils/api";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
          setLoading(false);
        });
      }
    });
  };

  if (!loading)
    return (
      <>
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
        <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={10}>
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
          <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
            <MKBox mt={{ xs: 10, md: 10 }} textAlign="center">
              <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
            </MKBox>
            <Grid container justifyContent="center" py={6}>
              <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
                <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <MKTypography variant="h3">{`${user.NOM} ${user.PRENOM}`}</MKTypography>
                  <MKBox mx="auto" my={3} textAlign="center">
                    {/* Link with redirection */}
                    <Link to="/pages/Account/Parameter">
                      <MKButton variant="outlined" color="info" size="small">
                        Paramètre
                      </MKButton>
                    </Link>
                  </MKBox>
                </MKBox>
                {/* <Grid container spacing={3} mb={3}>
                  <Grid item>
                    <MKTypography component="span" variant="body2" fontWeight="bold">
                      323&nbsp;
                    </MKTypography>
                    <MKTypography component="span" variant="body2" color="text">
                      Posts
                    </MKTypography>
                  </Grid>
                </Grid> */}
                <MKTypography variant="body1" fontWeight="light" color="text">
                  Email: {user.EMAIL}
                </MKTypography>
                <MKTypography variant="body1" fontWeight="light" color="text">
                  Role: {user.ROLE}
                </MKTypography>
                <MKTypography variant="body1" fontWeight="light" color="text">
                  Type: {user.TYPE}
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
        </MKBox>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </>
    );
  else return <></>;
}

export default Profile;
