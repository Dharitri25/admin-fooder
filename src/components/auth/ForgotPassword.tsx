import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState, ChangeEvent } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Theme,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles";
import { tokens } from "../../theme";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: "128px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: "16px",
  },
  submit: {
    margin: "48px 0px 32px",
  },
}));

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
  const classes = useStyles();
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
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Forget password
          </Typography>
          <form className={classes.form} noValidate>
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
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}
