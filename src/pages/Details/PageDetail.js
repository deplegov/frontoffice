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
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import CommentLine from "components/CommentLine/commentLine";
import { useState } from "react";
import Reacts from "components/Reacts/reacts";

PageDetail.propTypes = {
  page: PropTypes.string,
};

export default function PageDetail() {
  let commentData = {
    username: "feno.rak",
    date: "21 Juil 2023, 21:30",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet diam necjusto finibus dictum.",
  };

  const [comment, setComment] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [logged, setLogged] = useState(true);

  const onComment = () => {
    console.log(comment);
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
      <Container>
        <div style={{ fontSize: "15px", marginTop: "15px" }}>
          <span style={{ marginRight: "15px" }}>
            <img width={"15px"} src={`${process.env.PUBLIC_URL}/reaction.svg`} alt="React icon" />{" "}
            1234
          </span>
          <span>
            <img
              width={"15px"}
              src={`${process.env.PUBLIC_URL}/commentaire.svg`}
              alt="Comment icon"
            />{" "}
            1234
          </span>
        </div>
        <div style={{ marginTop: "15px" }}>
          <Reacts active={0} hide={!logged} />
        </div>
        <div style={{ marginTop: "15px" }}>
          <h3>Commentaires</h3>
          <MKBox component="form" role="form" pt={3}>
            <MKBox mb={2}>
              <MKInput
                label="Ecrivez votre commentaire"
                multiline
                rows={5}
                fullWidth
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                disabled={!logged}
              />
            </MKBox>
            <MKBox mb={2}>
              <MKButton variant="gradient" color="info" onClick={onComment} disabled={!logged}>
                Commenter
              </MKButton>
            </MKBox>
            <CommentLine
              username={commentData.username}
              date={commentData.date}
              comment={commentData.comment}
            />
          </MKBox>
        </div>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
