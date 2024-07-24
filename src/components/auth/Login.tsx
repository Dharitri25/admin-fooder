import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import { Link as RouterLink } from "react-router-dom";

interface SigninProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn: React.FC<SigninProps> = ({ setIsLogin }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [authDetails, setAuthDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log({
      email: authDetails.email,
      password: authDetails.password,
    });
    localStorage.setItem("authDetails", JSON.stringify(authDetails));
    setIsLogin(true);
    navigate("/dashboard");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: colors.greenAccent[700] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Please sign in here
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              onChange={(e) =>
                setAuthDetails({ ...authDetails, email: e.target.value })
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="password"
              onChange={(e) =>
                setAuthDetails({ ...authDetails, password: e.target.value })
              }
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: colors.greenAccent[700] }}
              onClick={() => handleSubmit()}
            >
              Sign In
            </Button>
            <Grid container>
              <Link component={RouterLink} to="/forgotPassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
