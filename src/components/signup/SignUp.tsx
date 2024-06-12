import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import travelImg from "../../assets/travel.png";

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const RegisterPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "400px",
  margin: "auto",
}));

const FormGrid = styled(Grid)({
  marginTop: "2rem",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
});

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    phoneNumber: "",
    password: "",
    userAddress: "",
  });

  // Function to handle form submission
  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent default form submission

    try {
      // Post data to the database
      const response = await axios.post(
        "http://localhost:5005/users",
        formData
      );
      console.log(response.data); // Log the response

      // Clear the form fields after successful submission
      setFormData({
        userName: "",
        userEmail: "",
        phoneNumber: "",
        password: "",
        userAddress: "",
      });
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  // Function to handle input change
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <RegisterPaper elevation={3}>
      <Typography component="h1" variant="h5">
        Register with Us
      </Typography>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="userName"
          autoComplete="name"
          value={formData.userName}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="userEmail"
          autoComplete="email"
          value={formData.userEmail}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="phone"
          label="Phone"
          name="phoneNumber"
          autoComplete="phone"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          // value={formData.confirmPassword}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="address"
          label="Address"
          name="userAddress"
          autoComplete="address"
          value={formData.userAddress}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: "#DC2626" }}
        >
          REGISTER
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Log in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </RegisterPaper>
  );
};

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
