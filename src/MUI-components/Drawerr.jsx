import {
  Drawer,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  useTheme,
  IconButton,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person,
  Settings,
} from "@mui/icons-material";

const Drawerr = ({
  drswerWidth,
  setMode,
  noneOrblock,
  tempOrperm,
  hidedrawer,
}) => {
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const theme = useTheme();

  const myList = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Create", icon: <Create />, path: "/create" },
    { text: "Profile", icon: <Person />, path: "profile" },
    { text: "Settings", icon: <Settings />, path: "settings" },
  ];

  return (
    <Drawer
      sx={{
        display: { xs: noneOrblock, sm: "block" },
        width: `${drswerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drswerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant={tempOrperm}
      anchor="left"
      open={true}
      onClose={() => {
        hidedrawer();
      }}
    >
      <List>
        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
        >
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "light" ? "dark" : "light"
              );
              setMode(theme.palette.mode === "light" ? "dark" : "light");
            }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </ListItem>
        <Divider />

        {myList.map((item) => {
          return (
            <ListItem
            key={item.text}
              sx={{
                bgcolor:
                  currentLocation.pathname === item.path
                    ? // @ts-ignore
                      theme.palette.favColor.main
                    : null,
              }}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerr;
