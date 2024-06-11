import React, { useState } from "react";
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
import axios from "axios";

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

const SignInPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "400px",
  margin: "auto",
}));

const SignInForm = () => {

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Make Axios call to get data
    axios.get(`http://localhost:5005/users/${userId}/${password}`)
      .then(response => {
        // Handle the response data
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  };

  return (
    <SignInPaper elevation={3}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          value={userId}
          onChange={(e)=>setUserId(e.target.value)}
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
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        
        <Button
          type="button" // Change to type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: "#DC2626" }}
          onClick={handleLogin} // Call handleLogin function on button click
        >
          SIGN IN
        </Button>
        
        <Grid container justifyContent="flex-end">
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/sign-up" variant="body2">
              {"Don't have an account? Sign up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </SignInPaper>
  );
};

const Login = () => (
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
          <SignInForm />
        </Grid>
      </FormGrid>
    </Box>
  </MainContainer>
);

export default Login;
