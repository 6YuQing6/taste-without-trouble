import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { IconButton } from '@mui/material';
import FlatwareIcon from "@mui/icons-material/Flatware";
// import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/material";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";
// import { Link } from "react-router-dom";

export default function ResponsiveAppBar() {
  const { userLoggedIn } = useAuth();

  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);
  };

  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  const Logo = (
    <Button variant="text" color="inherit" href="/taste-without-trouble/">
      <FlatwareIcon
        sx={{
          marginRight: "0.3rem",
          display: { xs: "flex", sm: "flex" },
        }}
      />
      <Typography
        sx={{
          display: { sm: "flex" },
          fontWeight: 700,
          color: "inherit",
        }}>
        Taste Without Trouble
      </Typography>
    </Button>
  );

  return (
    <React.Fragment>
      <AppBar position="fixed" elevation={0}>
        <Toolbar sx={{ paddingBlockStart: "1rem" }}>
          {Logo}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex" },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}>
            <Button
              variant="text"
              color="inherit"
              key={"recipes"}
              href={`#/recipes`}
              onClick={handleCloseNavMenu}
              sx={{ display: "block" }}>
              {"Recipes"}
            </Button>

            <Button
              variant="text"
              color="inherit"
              key={"about"}
              href={`#/about`}
              onClick={handleCloseNavMenu}
              sx={{ display: "block" }}>
              {"About Us"}
            </Button>

            {!userLoggedIn && (
              <Button
                variant="text"
                color="inherit"
                key={"login"}
                href={`#/login`}
                onClick={handleCloseNavMenu}
                sx={{ display: "block" }}>
                {"Login"}
              </Button>
            )}

            {userLoggedIn && (
              <Button
                variant="text"
                color="inherit"
                key={"logout"}
                onClick={doSignOut}
                sx={{ display: "block" }}>
                {"Logout"}
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Offset />
      {/* <Toolbar /> */}
    </React.Fragment>
  );
}
