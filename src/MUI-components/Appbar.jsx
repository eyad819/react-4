import { Menu } from "@mui/icons-material";
import { Toolbar, AppBar, Avatar, Link, Typography, IconButton,  } from "@mui/material";

const Appbar = ({ drswerWidth,showdrawer }) => {
  return (
    <AppBar
      sx={{
        ml: { xs: 0, sm: `${drswerWidth}px` },
        width: {sm:`calc(100% - ${drswerWidth}px)`},
      }}
      position="static"
    >
      <Toolbar>
        <IconButton onClick={() => {
    showdrawer()
        }} sx={{display:{sm:"none"}}} >
<Menu/>
        </IconButton>
        <Link
          underline="none"
          sx={{ flexGrow: 1, "&:hover": { fontSize: "16.5px" } }}
          color="inherit"
          href="/"
        >
          My expenses
        </Link>

        <Typography mr="10px">Eyad Ibrahim</Typography>
        <Avatar alt="Remy Sharp" src="./imge/photo.jfif" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
