import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import { useAuth } from "../contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage] = useState("");

  const { userLoggedIn } = useAuth();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password);
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}>
          <Box sx={{ marginBottom: 3, textAlign: "center" }}>
            <Typography component="h1" variant="h5" fontWeight="600">
              Create a New Account
            </Typography>
          </Box>

          <Box component="form" onSubmit={onSubmit} sx={{ width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              disabled={isRegistering}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="off"
              disabled={isRegistering}
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />

            {errorMessage && (
              <Typography color="error" fontWeight="600" sx={{ mt: 2 }}>
                {errorMessage}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isRegistering}
              sx={{ mt: 3, mb: 2 }}>
              {isRegistering ? "Signing Up..." : "Sign Up"}
            </Button>

            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{
                    fontWeight: "600",
                    textDecoration: "none",
                  }}>
                  Continue
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Register;
