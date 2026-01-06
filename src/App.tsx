import "./App.css";
// import ResponsiveAppBar from "./components/AppBar";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./components/theme";
import { Outlet } from "react-router";
import ResponsiveAppBar from "./components/AppBar";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <ResponsiveAppBar />
          <Container>
            <Outlet />
          </Container>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
