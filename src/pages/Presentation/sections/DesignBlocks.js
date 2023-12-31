// react-router-dom components
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

// @mui material components
import { Container, Grid, Input, Button } from "@mui/material";

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
  pagination: PropTypes.shape({
    page: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
  }).isRequired,
  changePage: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};

function DesignBlocks({ data, page, pagination, changePage }) {
  const [selectedDate, setSelectedDate] = useState(""); // État pour suivre la region sélectionnée
  const [paging, setPaging] = useState([]);

  useEffect(() => {
    if (page === "CallTender") {
      const tmp = [];
      for (let i = 1; i <= pagination.totalPages; i++) tmp.push(i);
      setPaging(tmp);
    }
  }, []);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleFilterClick = () => {
    // Perform filtering action here based on selected filters
    // For example, fetch data from an API using selected filters
    console.log("Filters:", {
      selectedDate,
    });
  };
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
      {page === "CallTender" && (
        <Container sx={{ height: "100%" }}>
          <Grid container item justifyContent="center" xs={12} lg={6} mx="auto" height="100%">
            <MKPagination>
              <MKPagination
                item
                onClick={() => {
                  changePage(pagination.page - 1);
                }}
              >
                <Icon>keyboard_arrow_left</Icon>
              </MKPagination>
              {paging.map((p) => (
                <MKPagination
                  key={p}
                  item
                  active={p === pagination.page}
                  onClick={() => {
                    changePage(p);
                  }}
                >
                  {p}
                </MKPagination>
              ))}
              <MKPagination
                item
                onClick={() => {
                  changePage(pagination.page + 1);
                }}
              >
                <Icon>keyboard_arrow_right</Icon>
              </MKPagination>
            </MKPagination>
          </Grid>
        </Container>
      )}
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
            <Grid item xs={12} sm={3}>
              <MKTypography variant="body1" color="text">
                Date
              </MKTypography>
              <Input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                // Other Input props and styling options as needed
              />
            </Grid>

            {/* Barre de catégorisation et filtrage */}
            {/* <Grid item xs={12} sm={3}>
              <MKTypography variant="body1" color="text">
                Secteur
              </MKTypography>
              <Select value={selectedCategory} onChange={handleCategoryChange}>
                <MenuItem value="">Tous</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={3}>
              <MKTypography variant="body1" color="text">
                Status
              </MKTypography>
              <Select value={selectedStatus} onChange={handleStatusChange}>
                <MenuItem value="">Tous</MenuItem>
                {status.map((stat) => (
                  <MenuItem key={stat} value={stat}>
                    {stat}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={3}>
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
 */}
            {/* Filtrer Button */}
            <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
              <Button variant="contained" color="black" onClick={handleFilterClick}>
                Filtrer
              </Button>
            </Grid>
          </Grid>
        </Container>
      )}
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
