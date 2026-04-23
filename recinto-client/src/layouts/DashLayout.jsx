import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { styled, useTheme, alpha, ThemeProvider, createTheme } from "@mui/material/styles";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LogoutIcon from "@mui/icons-material/Logout";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8B5CF6',
    },
    secondary: {
      main: '#C084FC',
    },
    background: {
      default: '#030108',
      paper: '#080510',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a1a1aa',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const drawerWidth = 280;

const dashboardNavItems = [
  {
    label: "Dashboard",
    title: "Dashboard",
    to: "/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Reports",
    title: "Reports",
    to: "/dashboard/reports",
    icon: AssessmentIcon,
  },
  {
    label: "Users",
    title: "Users",
    to: "/dashboard/users",
    icon: PeopleIcon,
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(9)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(11)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 3),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: alpha("#030108", 0.65),
  backdropFilter: "blur(24px)",
  color: "#ffffff",
  borderBottom: "1px solid rgba(139, 92, 246, 0.15)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "#05030A",
      borderRight: "1px solid rgba(139, 92, 246, 0.15)",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "#05030A",
      borderRight: "1px solid rgba(139, 92, 246, 0.15)",
    },
  }),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2.5),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#a1a1aa",
  transition: "color 0.3s ease",
}));

const Search = styled('div')(({ theme }) => ({
  position: "relative",
  borderRadius: "100px",
  backgroundColor: alpha("#8B5CF6", 0.05),
  border: "1px solid rgba(139, 92, 246, 0.2)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    backgroundColor: alpha("#8B5CF6", 0.1),
    border: "1px solid rgba(139, 92, 246, 0.4)",
    boxShadow: "0 0 20px rgba(139, 92, 246, 0.15)",
  },
  "&:focus-within": {
    backgroundColor: alpha("#8B5CF6", 0.15),
    border: "1px solid rgba(192, 132, 252, 0.7)",
    boxShadow: "0 0 25px rgba(139, 92, 246, 0.25)",
    "& .MuiSvgIcon-root": { color: "#C084FC" }
  },
  marginRight: theme.spacing(4),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.2, 2, 1.2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4.5)})`,
    transition: theme.transitions.create("width"),
    fontSize: "0.85rem",
    letterSpacing: "0.05em",
    [theme.breakpoints.up("md")]: {
      width: "28ch",
    },
  },
}));

const getPageTitle = (pathname) =>
  dashboardNavItems.find(({ to }) => to === pathname)?.title ?? "Valence Dashboard";

const DashLayout = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);
  const navigate = useNavigate();

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleLogout = () => navigate("/");

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex", height: "100vh", backgroundColor: "background.default", overflow: "hidden" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar sx={{ minHeight: "88px !important", px: { xs: 2, md: 4 } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ 
                marginRight: 4, 
                ...(open && { display: 'none' }),
                color: "#C084FC",
                "&:hover": { backgroundColor: alpha("#8B5CF6", 0.1) }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ 
                flexGrow: 1, 
                fontWeight: 200, 
                letterSpacing: '0.15em',
                fontSize: '1.6rem',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Box component="span" sx={{ width: 30, height: '1px', background: 'linear-gradient(90deg, #8B5CF6, transparent)' }} />
              {pageTitle}
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon fontSize="small" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search database..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Button 
              variant="outlined" 
              onClick={handleLogout}
              startIcon={<LogoutIcon sx={{ fontSize: '1rem !important', mb: '1px' }}/>}
              sx={{
                borderRadius: "100px",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                fontWeight: 700,
                fontSize: "0.65rem",
                padding: "10px 24px",
                color: "#C084FC",
                borderColor: alpha("#8B5CF6", 0.3),
                backgroundColor: alpha("#8B5CF6", 0.05),
                transition: "all 0.4s ease",
                "&:hover": {
                  backgroundColor: alpha("#8B5CF6", 0.2),
                  borderColor: "#C084FC",
                  color: "#ffffff",
                  boxShadow: "0 0 25px rgba(139, 92, 246, 0.4)",
                  transform: "translateY(-1px)"
                }
              }}
            >
              Exit
            </Button>
          </Toolbar>
        </AppBar>
        
        <Drawer variant="permanent" open={open}>
          <DrawerHeader sx={{ minHeight: "88px !important" }}>
            {open && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pl: 2 }}>
                <Box sx={{ width: 16, height: '1px', background: 'linear-gradient(90deg, #C084FC, transparent)' }} />
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.5em', color: '#C084FC', textTransform: 'uppercase' }}>
                  Valence
                </Typography>
              </Box>
            )}
            <IconButton 
              onClick={handleDrawerClose} 
              sx={{ 
                color: "#a1a1aa",
                mr: 1,
                "&:hover": { color: "#C084FC", backgroundColor: alpha("#8B5CF6", 0.1) } 
              }}
            >
              {darkTheme.direction === "rtl" ? <ChevronRightIcon /> : <MenuOpenIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider sx={{ borderColor: "rgba(139, 92, 246, 0.1)" }} />
          <List sx={{ mt: 3, px: open ? 3 : 1.5 }}>
            {dashboardNavItems.map((item) => {
              const ItemIcon = item.icon;
              const isActive = location.pathname === item.to || location.pathname === item.to + "/";
              return (
                <ListItem key={item.to} disablePadding sx={{ display: "block", mb: 1.5 }}>
                  <ListItemButton
                    component={Link}
                    to={item.to}
                    sx={{
                      minHeight: 52,
                      px: 2.5,
                      borderRadius: 4,
                      justifyContent: open ? "initial" : "center",
                      backgroundColor: isActive ? alpha("#8B5CF6", 0.15) : "transparent",
                      border: isActive ? "1px solid rgba(139, 92, 246, 0.3)" : "1px solid transparent",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: isActive ? alpha("#8B5CF6", 0.2) : alpha("#ffffff", 0.04),
                        border: isActive ? "1px solid rgba(139, 92, 246, 0.4)" : "1px solid rgba(255, 255, 255, 0.05)",
                        transform: "translateX(2px)"
                      },
                    }}
                  >
                    {isActive && open && (
                      <motion.div 
                        layoutId="activeIndicator"
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: "4px",
                          backgroundColor: "#C084FC",
                          boxShadow: "0 0 15px #C084FC"
                        }}
                      />
                    )}
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: isActive ? "#ffffff" : "#71717a",
                        transition: "color 0.3s ease",
                        filter: isActive ? "drop-shadow(0 0 8px rgba(192,132,252,0.6))" : "none"
                      }}
                    >
                      <ItemIcon sx={{ fontSize: isActive ? "1.5rem" : "1.3rem" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      sx={{ 
                        opacity: open ? 1 : 0,
                        color: isActive ? "#ffffff" : "#a1a1aa",
                        transition: "opacity 0.3s ease, color 0.3s ease",
                        "& .MuiTypography-root": {
                          fontWeight: isActive ? 700 : 400,
                          fontSize: "0.85rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase"
                        }
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Drawer>

        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            height: "100vh", 
            overflowY: "auto", 
            position: "relative",
            backgroundColor: "#030108"
          }}
        >
          <Box sx={{ 
            position: "absolute", 
            inset: 0, 
            opacity: 0.15, 
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            pointerEvents: "none", 
            zIndex: 0 
          }} />
          <Box sx={{ position: "absolute", top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
          <Box sx={{ position: "absolute", bottom: '-20%', right: '-10%', width: '60vw', height: '60vw', background: "radial-gradient(circle, rgba(192, 132, 252, 0.05) 0%, transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
          
          <DrawerHeader sx={{ minHeight: "88px !important" }} />
          
          <Box sx={{ position: "relative", zIndex: 1, p: { xs: 3, md: 6 }, width: '100%', maxWidth: '100%' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: '100%' }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DashLayout;