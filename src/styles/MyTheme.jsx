const { grey } = require("@mui/material/colors");

const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          //light
          eyad: {
            main: "#64748B",
          },
          favColor: {
            main: grey[300],
          },
        }
      : {
          //dark

          eyad: {
            main: "teal",
          },
          favColor: {
            main: grey[800],
          },
        }),
  },
});
export default getDesignTokens;
