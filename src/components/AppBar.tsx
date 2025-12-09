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

export default function ResponsiveAppBar() {
  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);
  };

  const pagesText = ["Recipes", "About Us"];
  const pagesLink = ["recipes", "about"];

  const Pages = (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex" },
        justifyContent: { xs: "center", sm: "flex-start" },
      }}>
      {pagesText.map((page, index) => (
        <Button
          variant="text"
          color="inherit"
          key={page}
          href={pagesLink[index]}
          onClick={handleCloseNavMenu}
          sx={{ display: "block" }}>
          {page}
        </Button>
      ))}
    </Box>
  );

  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Button variant="text" color="inherit" href="/">
            <FlatwareIcon
              sx={{
                marginRight: "0.3rem",
                display: { xs: "flex", sm: "flex" },
              }}
            />
            <Typography
              sx={{
                display: { xs: "none", sm: "flex" },
                fontWeight: 700,
                color: "inherit",
              }}>
              Taste Without Trouble
            </Typography>
            <Typography
              sx={{
                display: { xs: "flex", sm: "none" },
                fontWeight: 700,
                color: "inherit",
              }}>
              TWT
            </Typography>
          </Button>

          {Pages}
        </Toolbar>
      </AppBar>
      <Offset />
      {/* <Toolbar /> */}
    </React.Fragment>
  );
}
