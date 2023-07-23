import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBarInitialDefault from "components/NavBarInitialDefault";
import bgImage from "assets/images/bg-presentation.jpg";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import MKPagination from "components/MKPagination";
import { Icon } from "@mui/material";
import PropTypes from "prop-types";

PageDetailCallForTenders.propTypes = {
  page: PropTypes.string,
};

export default function PageDetailCallForTenders() {
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
              Titre de l&apos;actualité
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet diam nec
              justo finibus dictum. Vivamus vitae interdum quam, sit amet scelerisque purus. Nam
              ultricies sollicitudin gravida. Duis a efficitur sapien. Suspendisse ac laoreet purus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet diam nec
              justo finibus dictum. Vivamus vitae interdum quam, sit amet scelerisque purus. Nam
              ultricies sollicitudin gravida. Duis a efficitur sapien. Suspendisse ac laoreet purus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet diam nec
              justo finibus dictum. Vivamus vitae interdum quam, sit amet scelerisque purus. Nam
              ultricies sollicitudin gravida. Duis a efficitur sapien. Suspendisse ac laoreet purus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet diam nec
              justo finibus dictum. Vivamus vitae interdum quam, sit amet scelerisque purus. Nam
              ultricies sollicitudin gravida. Duis a efficitur sapien. Suspendisse ac laoreet purus.
            </p>
          </div>
        </div>
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
