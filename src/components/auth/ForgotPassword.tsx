import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState, ChangeEvent } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

function validateEmail(email: string) {
  let hasError = true;
  let error = "";

  if (!email) {
    error = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    error = "Email address is invalid";
  } else {
    hasError = false;
  }

  return { hasError, error };
}

interface EmailState {
  value: string;
  touched: boolean;
  hasError: boolean;
  error: string;
}

interface FormState {
  email: EmailState;
}

export default function ForgotPassword() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const initialState: FormState = {
    email: {
      value: "",
      touched: false,
      hasError: true,
      error: "",
    },
  };

  const [email, setEmail] = useState<EmailState>(initialState.email);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    const { hasError, error } = validateEmail(value);
    setEmail((prevState) => ({
      ...prevState,
      value,
      touched: true,
      hasError,
      error,
    }));
  }

  function handleOnBlur() {
    setEmail((prevState) => ({
      ...prevState,
      touched: true,
    }));
  }

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
          <Typography component="h1" variant="h5">
            Forget password
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              onBlur={handleOnBlur}
              error={email.touched && email.hasError}
              helperText={email.touched && email.error}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: colors.greenAccent[700] }}
            >
              Send Mail
            </Button>
            <Grid container>
              <Link component={RouterLink} to="/" variant="body2">
                {"Back to Sign In"}
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
