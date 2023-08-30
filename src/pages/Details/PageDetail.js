import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBarInitialDefault from "components/NavBarInitialDefault";
import bgImage from "assets/images/bg-presentation.jpg";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
// import MKPagination from "components/MKPagination";
// import { Icon } from "@mui/material";
import PropTypes from "prop-types";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import CommentLine from "components/CommentLine/commentLine";
import { useEffect, useState } from "react";
// import Reacts from "components/Reacts/reacts";
import { useParams } from "react-router-dom";
import api from "utils/api";

PageDetail.propTypes = {
  page: PropTypes.string,
};

export default function PageDetail() {
  const logged = !(sessionStorage.getItem("user") === null);

  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [countComments, setCountComments] = useState(0);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getDetails(() => getComments(getCountComments));
    if (logged) setUser(JSON.parse(sessionStorage.getItem("user")));
  }, []);

  const addComment = () => {
    fetch(api("comments"), {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        contenu: comment,
        utilisateur_id: user.ID,
        article_id: id,
      }),
    }).then((res) => {
      if (res.ok)
        res.json().then(() => {
          const tmp = comments;
          tmp.push({
            CONTENU: comment,
            DATE_COM: new Date(),
            UTILISATEUR_ID: user.ID,
            ARTICLE_ID: id,
            UTILISATEUR: `${user.NOM} ${user.PRENOM}`,
          });
          const count = countComments + 1;
          setCountComments(count);
          setComments(tmp);
          setComment("");
        });
    });
  };

  const getDetails = (callback) => {
    fetch(api(`articles/${id}`)).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          if (data && data.length > 0) setDetail(data[0]);
          callback();
        });
      }
    });
  };

  const getComments = (callback) => {
    fetch(api(`comments?article_id=${id}`)).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          setComments(data);
          callback();
        });
      }
    });
  };

  const getCountComments = () => {
    fetch(api(`comments/count?article_id=${id}`)).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          setCountComments(data);
          setLoading(false);
        });
      }
    });
  };

  const onComment = () => {
    addComment();
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
                {detail.TITRE}
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
        <Container>
          <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
            <div>
              <p>{detail.DESCRIPTION}</p>
            </div>
          </div>
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
        <Container>
          <div style={{ fontSize: "15px", marginTop: "15px" }}>
            {/* <span style={{ marginRight: "15px" }}>
              <img width={"15px"} src={`${process.env.PUBLIC_URL}/reaction.svg`} alt="React icon" />{" "}
              1234
            </span> */}
            <span>
              <img
                width={"15px"}
                src={`${process.env.PUBLIC_URL}/commentaire.svg`}
                alt="Comment icon"
              />{" "}
              {countComments[0].COUNT}
            </span>
          </div>
          {/* <div style={{ marginTop: "15px" }}>
            <Reacts active={0} hide={!logged} />
          </div> */}
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
              {comments.map((comment, i) => (
                <CommentLine
                  key={i}
                  username={comment.UTILISATEUR}
                  date={comment.DATE_COM}
                  comment={comment.CONTENU}
                />
              ))}
            </MKBox>
          </div>
        </Container>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </>
    );
  return <></>;
}
