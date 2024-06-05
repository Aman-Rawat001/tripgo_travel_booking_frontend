import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import RegistrationForm from "./registrationForm/RegistrationForm";
import travelImg from "../../assets/travel.png";

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const FormGrid = styled(Grid)({
  marginTop: "2rem",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
});

const SignUp = () => (
  <MainContainer>
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
      }}
    >
      <FormGrid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={travelImg}
            alt="Travelers"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RegistrationForm />
        </Grid>
      </FormGrid>
    </Box>
  </MainContainer>
);

export default SignUp;
