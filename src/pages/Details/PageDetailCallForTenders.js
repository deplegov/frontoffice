import React, { useEffect, useState } from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBarInitialDefault from "components/NavBarInitialDefault";
import bgImage from "assets/images/bg-presentation.jpg";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
// import MKPagination from "components/MKPagination";
import { Paper } from "@mui/material";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import api from "utils/api";
import moment from "moment";

PageDetailCallForTenders.propTypes = {
  page: PropTypes.string,
};

export default function PageDetailCallForTenders() {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [tender, setTender] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTenderDetail();
  }, []);

  const getTenderDetail = () => {
    setLoading(true);
    fetch(api(`tenders/${id}`)).then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          setTender(res.tender);
          setLoading(false);
        });
      }
    });
  };

  // const handleDownloadDocument = () => {
  //   // Replace with the logic to download the document
  //   // For example, you can use the 'window.open' method to download the file.
  //   // Example: window.open('/path/to/document.pdf', '_blank');
  // };

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
                {tender.title}
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            {/* <Grid item xs={0}>
              <Button variant="contained" color="black" onClick={handleDownloadDocument}>
                Télécharger le document
              </Button>
            </Grid> */}
            <Grid item xs={12}>
              {/* <Paper sx={{ p: 3 }}>
                <MKTypography variant="h4" mb={2}>
                  Nom de la Société
                </MKTypography>
                <MKTypography variant="body1" mb={2}>
                  {callForTenderDetails.companyName}
                </MKTypography>
              </Paper> */}
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <MKTypography variant="h4" mb={2}>
                  Description
                </MKTypography>
                <MKTypography variant="body1" mb={2}>
                  {tender.description}
                </MKTypography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <MKTypography variant="h4" mb={2}>
                  Critères
                </MKTypography>

                {tender.critere.map((c, index) => (
                  <ul key={index}>
                    <li>
                      <h5>{c.entitle}</h5>
                      <p>{c.description}</p>
                    </li>
                  </ul>
                ))}
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <MKTypography variant="h4" mb={2}>
                  Dates
                </MKTypography>
                <ul>
                  <li>
                    <h5>
                      {"Date d'émission de l'offre: " +
                        moment(tender.dateEmission).format("DD/MM/YYYY")}
                    </h5>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h5>Date limite: {moment(tender.dateLimit).format("DD/MM/YYYY")}</h5>
                  </li>
                </ul>
              </Paper>
            </Grid>

            {/* <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <MKTypography variant="h4" mb={2}>
                  Instructions de soumission
                </MKTypography>
                <MKTypography variant="body1" mb={2}>
                  {callForTenderDetails.description}
                </MKTypography>
              </Paper>
            </Grid> */}
          </Grid>
        </Container>
        {/* <Container sx={{ height: "100%" }}>
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
        </Container> */}
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </>
    );
  else return <></>;
}
