import "./App.css";
// import ResponsiveAppBar from "./components/AppBar";
import { ThemeProvider } from "@mui/material";
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

          <Outlet />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
