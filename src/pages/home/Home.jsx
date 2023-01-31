import "./home.css";
import { useEffect, useState } from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const Home = () => {
  //***** show data ****//
  const [mydata, setmydata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, [mydata]);
  let totalprice=0;

  return (
    <Box>
      {mydata.map((item) => {
        totalprice += item.price
        return (
          <Paper
          key={item.id}
            sx={{
              position: "relative",
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              pt: "27px",
              mt: "22px",
              pb: "7px",
            }}
          >
            <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
              {item.title}
            </Typography>
            <Typography
              sx={{
                mr: "33px",
                fontWeight: 500,
                fontSize: "1.4em",
                opacity: "0.8",
              }}
              variant="h6"
            >
              ${item.price}
            </Typography>
            {/* delete data  */}
            <IconButton onClick={() => {
                  fetch( ` http://localhost:3100/mydata/${item.id}`, {
                    method: "DELETE",
            
                  })
            }} sx={{ position: "absolute", top: "0", right: "0" }}>
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}
           {/***** total spend *****/}
    <Typography sx={{textAlign:"center",mt:"55px"}} variant="h6" >
    👉You Spend ${totalprice}
    </Typography>
    </Box>
  );
};

export default Home;
