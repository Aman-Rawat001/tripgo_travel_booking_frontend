import React from "react";
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

const RegisterPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "400px",
  margin: "auto",
}));

const RegistrationForm = () => (
  <RegisterPaper elevation={3}>
    <Typography component="h1" variant="h5">
      Register with Us
    </Typography>
    <Box component="form" sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="phone"
        label="Phone"
        name="phone"
        autoComplete="phone"
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
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        id="confirmPassword"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="address"
        label="Address"
        name="address"
        autoComplete="address"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: "#00dddd" }}
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

export default RegistrationForm;
