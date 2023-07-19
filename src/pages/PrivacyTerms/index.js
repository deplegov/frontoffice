import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBarInitialDefault from "components/NavBarInitialDefault";
import bgImage from "assets/images/bg-presentation.jpg";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

export default function PrivacyPolicy() {
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
              Politique De Confidentialité
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <p>
            Bienvenue sur notre site web ! Nous accordons une grande importance à la protection de
            vos données personnelles. Cette politique de confidentialité vise à vous informer sur la
            manière dont nous collectons, utilisons, partageons et stockons vos données.
          </p>
          <p>
            <strong>Collecte des données :</strong> Nous collectons certaines données personnelles
            lorsque vous utilisez notre site web, telles que votre nom, adresse e-mail et
            informations de contact. Ces données sont collectées lorsque vous remplissez des
            formulaires, vous inscrivez à notre newsletter ou interagissez avec notre site.
          </p>
          <p>
            <strong>Utilisation des données :</strong> Les données que nous collectons sont
            utilisées pour vous fournir les services que vous demandez, améliorer notre site web et
            personnaliser votre expérience. Nous pouvons également utiliser vos données pour vous
            envoyer des informations sur nos produits, offres spéciales ou mises à jour du site,
            mais nous ne le ferons qu&apos;avec votre consentement.
          </p>
          <p>
            <strong>Partage des données :</strong> Nous ne partagerons pas vos données personnelles
            avec des tiers sans votre consentement, sauf dans les cas où cela est requis par la loi
            ou pour protéger nos droits, notre sécurité ou celle d&apos;autrui.
          </p>
          <p>
            <strong>Stockage des données :</strong> Vos données personnelles seront conservées aussi
            longtemps que nécessaire pour atteindre les fins pour lesquelles elles ont été
            collectées et conformément à la loi en vigueur.
          </p>
          <p>
            <strong>Protection des données :</strong> Nous prenons des mesures de sécurité
            appropriées pour protéger vos données personnelles contre tout accès non autorisé ou
            toute divulgation. Cependant, veuillez noter qu&apos;aucune méthode de transmission sur
            Internet, ou méthode de stockage électronique, n&apos;est totalement sécurisée.
          </p>
          <p>
            <strong>Vos droits :</strong> Vous avez le droit de demander l&apos;accès, la
            rectification, la suppression ou la limitation du traitement de vos données
            personnelles. Vous avez également le droit de vous opposer au traitement de vos données
            à des fins de marketing direct. Pour exercer ces droits, veuillez nous contacter à
            l&apos;adresse e-mail fournie ci-dessous.
          </p>
          <p>
            Si vous avez des questions concernant notre politique de confidentialité, veuillez nous
            contacter à l&apos;adresse e-mail suivante : gouvernance@exemple.com.
          </p>
        </div>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
