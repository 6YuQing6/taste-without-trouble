import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FlatwareIcon from "@mui/icons-material/Flatware";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/material";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";
import MenuIcon from "@mui/icons-material/Menu";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link } from "react-router-dom";
import Slide from "@mui/material/Slide";

import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const pages = ["Recipes", "Articles", "About"];

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({ threshold: 50 });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function BackToTop() {
  const trigger = useScrollTrigger({
    threshold: 200, // px before it appears
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: (theme) => theme.zIndex.tooltip,
        }}>
        <Fab size="small" color="primary" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
}

export default function ResponsiveAppBar() {
  const { userLoggedIn } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
      <h5 className="sm:flex font-bold text-lg tracking-tight">
        Taste Without Trouble
      </h5>
    </Button>
  );

  const NavigationKeys = (
    <>
      {pages.map((page) => (
        <Button
          key={page}
          variant="text"
          color="inherit"
          href={`#/${page.toLowerCase()}`}
          sx={{ display: "block" }}>
          {page}
        </Button>
      ))}

      {!userLoggedIn && (
        <Button
          variant="text"
          color="inherit"
          key={"login"}
          href={`#/login`}
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
    </>
  );

  const NavigationMenu = (
    <>
      <IconButton
        size="large"
        aria-label="menu-appbar"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: "block", md: "none" } }}>
        {pages.map((page) => (
          <MenuItem
            key={page}
            component={Link}
            onClick={handleCloseNavMenu}
            to={`/${page.toLowerCase()}`}>
            <h4>{page}</h4>
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            transition: "all 0.3s ease",
          }}>
          <Toolbar sx={{ paddingBlockStart: "0.5rem" }}>
            {Logo}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}>
              {NavigationKeys}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}>
              {NavigationMenu}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Offset />
      <BackToTop />
    </React.Fragment>
  );
}
