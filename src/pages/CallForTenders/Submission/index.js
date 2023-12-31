import { useEffect, useState } from "react";

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
import { MenuItem, Select } from "@mui/material";
import api from "utils/api";
import { Navigate } from "react-router-dom";

function Submission() {
  const isLogged = !(sessionStorage.getItem("user") === null);
  const user = JSON.parse(sessionStorage.getItem("user"));

  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [tenders, setTenders] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [society, setSociety] = useState(null);
  const [tender, setTender] = useState(0);
  const [loading, setLoading] = useState(true);
  const [files, setFiles] = useState(null);

  useEffect(() => {
    getTenders();
  }, []);

  const getTenders = (page = 1) => {
    setLoading(true);
    fetch(api(`tenders?page=${page}&pageNumber=1000`)).then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          setTenders(res.tenders);
          getSocieties();
        });
      }
    });
  };

  const getSocieties = () => {
    setLoading(true);
    fetch(api(`societies/${user && user.SOCIETE_ID}`)).then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          setSociety(res.society);
          setEntreprise(res.society.name);
          setLoading(false);
        });
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    formData.append(
      "data",
      JSON.stringify({
        society,
        dateSoumission: new Date(),
        tender: tenders[tender],
        status: 0,
      })
    );
    fetch(api("soumissions"), {
      // headers: { "Content-type": "multipart/form-data" },
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.ok)
        res.json().then(() => {
          setLoading(false);
          clearFields();
        });
      else {
        res.json().then((res) => {
          if (res) {
            setMessage(res.message);
            setLoading(false);
          }
        });
      }
    });
  };

  // eslint-disable-next-line no-unused-vars
  const clearFields = () => {
    // Reset form fields after submission
    setTender(0);
  };

  if (!isLogged) return <Navigate to={"/pages/authentication/sign-in"} />;
  if (!user && !user.SOCIETE_ID) return <Navigate to={"/presentation"} />;

  if (!loading)
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
                      <MKInput
                        type="text"
                        label="Nom de l'entreprise"
                        fullWidth
                        value={entreprise}
                        disabled
                      />
                    </MKBox>
                    <Grid item>
                      <MKTypography variant="body2" color="text">
                        Appel d&apos;offre
                      </MKTypography>
                      <Select value={tender} onChange={(e) => setTender(e.target.value)}>
                        {tenders.map((tender, i) => (
                          <MenuItem key={i} value={i}>
                            {tender.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item>
                      <MKTypography variant="body2" color="text">
                        Fichiers
                      </MKTypography>
                      <input
                        type="file"
                        id="files"
                        name="files"
                        multiple
                        onChange={(e) => setFiles(e.target.files)}
                      />
                    </Grid>

                    {/* <MKBox mb={2}>
                      <MKInput
                        type="file"
                        name="files"
                        multiple
                        fullWidth
                        onChange={(e) => setFiles(e.target.files)}
                      />
                    </MKBox> */}
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
                        onClick={handleSubmit}
                        disabled={loading}
                      >
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
      </>
    );
  else return <></>;
}

export default Submission;
