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

const SignInPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "400px",
  margin: "auto",
}));

const SignInForm = () => (
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
        name="captcha"
        label="R 0 6 Mg Q"
        id="captcha"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: "#DC2626" }}
      >
        VERIFY CAPTCHA
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
        disabled
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

export default SignInForm;
