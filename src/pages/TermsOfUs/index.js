import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBarInitialDefault from "components/NavBarInitialDefault";
import bgImage from "assets/images/bg-presentation.jpg";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

export default function TermsOfUs() {
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
              Conditions D&apos;utilisation
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div>
            <p>
              Bienvenue sur notre site web ! En utilisant ce site, vous acceptez de vous conformer à
              ces conditions d&apos;utilisation. Veuillez lire attentivement les conditions
              ci-dessous avant d&apos;utiliser notre site. Si vous n&apos;acceptez pas ces
              conditions, veuillez ne pas utiliser ce site.
            </p>
            <p>
              <strong>Utilisation du contenu :</strong> Le contenu de ce site est fourni à titre
              informatif uniquement. Nous ne garantissons pas l&apos;exactitude, l&apos;exhaustivité
              ou la pertinence du contenu. L&apos;utilisation du contenu est à vos propres risques.
            </p>
            <p>
              <strong>Propriété intellectuelle :</strong> Tout le contenu, y compris les textes,
              images, logos et marques présents sur ce site, est protégé par les lois sur la
              propriété intellectuelle. Vous n&apos;êtes pas autorisé à reproduire, distribuer,
              modifier ou exploiter le contenu sans notre autorisation écrite préalable.
            </p>
            <p>
              <strong>Liens vers des sites tiers :</strong> Notre site peut contenir des liens vers
              des sites web tiers. Nous n&apos;assumons aucune responsabilité quant au contenu ou à
              la politique de confidentialité de ces sites tiers.
            </p>
            <p>
              <strong>Utilisation du service :</strong> Vous acceptez de ne pas utiliser ce site
              d&apos;une manière qui pourrait endommager, désactiver, surcharger ou nuire à notre
              site ou à d&apos;autres utilisateurs. Vous vous engagez à ne pas tenter d&apos;accéder
              à des parties du site auxquelles vous n&apos;êtes pas autorisé, ni à utiliser des
              techniques d&apos;extraction de données ou des moyens automatisés pour collecter des
              informations à partir du site.
            </p>
            <p>
              <strong>Modifications :</strong> Nous nous réservons le droit de modifier ces
              conditions d&apos;utilisation à tout moment sans préavis. En continuant
              d&apos;utiliser le site après de telles modifications, vous acceptez les conditions
              d&apos;utilisation modifiées.
            </p>
            <p>
              <strong>Contact :</strong> Si vous avez des questions concernant nos conditions
              d&apos;utilisation, veuillez nous contacter à l&apos;adresse e-mail suivante :
              contact@exemple.com.
            </p>
          </div>
        </div>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
