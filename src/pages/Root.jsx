import { Outlet } from "react-router-dom";
import Appbar from "MUI-components/Appbar";
import Drawerr from "MUI-components/Drawerr";
import { Box } from "@mui/system";
import { useMemo, useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import getDesignTokens from "styles/MyTheme";
import React from "react";
const drswerWidth = 240;

const Root = () => {

  // dark/light mode

  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  //=========
  // drawer
//=========//
  const [tempOrperm, settermOrperm] = useState("permanent");
  const [noneOrblock, setnoneOrblock] = useState("none");
  //show drawer
  const showdrawer = () => {
    settermOrperm("temporary")
    setnoneOrblock("block")
  }
  // hide drawer
  const hidedrawer = () => {
    settermOrperm("permanent")
    setnoneOrblock('none')
  }
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar
          drswerWidth={drswerWidth} showdrawer={showdrawer}      
        />
        <Drawerr
          drswerWidth={drswerWidth}
          setMode={setMode}
          noneOrblock={noneOrblock}
          tempOrperm={tempOrperm} hidedrawer={hidedrawer}             />
        <Box
          component="main"
          sx={{
            ml: { sm: `${drswerWidth}px` },
            display: "flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
