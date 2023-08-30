// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import moment from "moment";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import data from "../page/data";

// Routes
// import headerDropdown from "headerDropdown";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";
import NavBarInitialDefault from "components/NavBarInitialDefault";
import api from "utils/api";
import { useEffect, useState } from "react";

function CallForTenders() {
  const [tenders, setTenders] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTenders();
  }, []);

  const getTendersData = () => {
    return [
      {
        title: "Offres",
        description: "Toutes les offres",
        items: tenders.map((tender) => {
          const profile = tender.critere.map((c) => c.entitle);
          profile.push(`Date limite: ${moment(tender.dateLimit).format("DD/MM/YYYY")}`);
          return {
            name: tender.title,
            profile,
            detail: tender.description,
            route: `/pages/Details/PageDetailCallForTenders/${tender._id}`,
          };
        }),
      },
    ];
  };

  const changePage = (page) => {
    if (page > 0 && page <= pagination.totalPages) getTenders(page);
  };

  const getTenders = (page = 1) => {
    setLoading(true);
    fetch(api(`tenders?page=${page}`)).then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          setTenders(res.tenders);
          setPagination(res.pagination);
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
              Appels d&apos;offre
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
        {!loading && (
          <DesignBlocks
            data={getTendersData()}
            pagination={pagination}
            changePage={changePage}
            page="CallTender"
          />
        )}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default CallForTenders;
