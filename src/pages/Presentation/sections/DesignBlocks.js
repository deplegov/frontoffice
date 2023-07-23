// react-router-dom components
import { Link } from "react-router-dom";
import React, { useState } from "react";

// @mui material components
import { Container, Grid, Select, MenuItem } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import MKPagination from "components/MKPagination";
import { Icon } from "@mui/material";

import PropTypes from "prop-types";

// Définir la validation des props avec PropTypes
DesignBlocks.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired,
    })
  ).isRequired,
  page: PropTypes.string.isRequired,
};

function DesignBlocks({ data, page }) {
  const [selectedCategory, setSelectedCategory] = useState(""); // État pour suivre la catégorie sélectionnée
  const [selectedStatus, setSelectedStatus] = useState(""); // État pour suivre la status sélectionnée
  const [selectedRegion, setSelectedRegion] = useState(""); // État pour suivre la region sélectionnée

  // Fonction pour gérer le changement de catégorie sélectionnée
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };
  const categories = ["Informtaique", "Gestion"];
  const status = ["Urgent", "Normal"];
  const regions = ["Region 1", "Region 2"];

  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, detail, mission, profile, route, pro }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={pro ? "/" : route}>
                <ExampleCard
                  image={image}
                  name={name}
                  detail={detail}
                  mission={mission}
                  profile={profile}
                  page={page}
                  pro={pro}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
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
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      {page === "Home" ? (
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
          >
            {/* <MKBadge
            variant="contained"
            color="info"
            badgeContent="Infinite combinations"
            container
            sx={{ mb: 2 }}
          /> */}

            <MKTypography variant="h2" fontWeight="bold">
              Collection de sections
            </MKTypography>
            <MKTypography variant="body1" color="text">
              Différentes sections à voir
            </MKTypography>
          </Grid>
        </Container>
      ) : (
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between" // Ajout de l'espacement entre les éléments
            sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
          >
            {/* Barre de catégorisation et filtrage */}
            <Grid item xs={12} sm={4}>
              <MKTypography variant="body1" color="text">
                Catégories
              </MKTypography>
              <Select value={selectedCategory} onChange={handleCategoryChange}>
                <MenuItem value="">Toutes les catégories</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={4}>
              <MKTypography variant="body1" color="text">
                Status
              </MKTypography>
              <Select value={selectedStatus} onChange={handleStatusChange}>
                <MenuItem value="">Tous les statuts</MenuItem>
                {status.map((stat) => (
                  <MenuItem key={stat} value={stat}>
                    {stat}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={4}>
              <MKTypography variant="body1" color="text">
                Région
              </MKTypography>
              <Select value={selectedRegion} onChange={handleRegionChange}>
                <MenuItem value="">Tous</MenuItem>
                {regions.map((region) => (
                  <MenuItem key={region} value={region}>
                    {region}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Container>
      )}
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
