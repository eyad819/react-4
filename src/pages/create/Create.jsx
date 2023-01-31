import "./Create.css";
import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


//**** button theme ****/
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.eyad.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.eyad.main,
  },
}));

const Create = () => {
  const navigate = useNavigate();
  //******send data*******//
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ price, title }) => {
    price=Number(price)
    fetch("  http://localhost:3100/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, title }),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      component="form"
      sx={{ width: "380px" }}
    >
      {/****** textfield title  *****/}
      <TextField
        error={Boolean(errors.title)}
        {...register("title", { required: {value:true,message:"Requires field"}, minLength: {value:3,message:"minumn leghth is 3"}})}
        label="Transaction Title"
        fullWidth
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
        helperText={Boolean(errors.title)?errors.title?.message.toString():null}
      />
      <br />
      {/****** textfield price  *****/}
      <TextField
        error={Boolean(errors.price)}
        {...register("price", { required: {value:true,message:"Requires field"} })}
        label="Amount"
        fullWidth
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
        type="number"
        helperText={Boolean(errors.price)?errors.price?.message.toString():null}
        
      />
       {/* button (submit)  */}
      <ColorButton
        type="submit"
        onClick={(params) => {}}
        sx={{ mt: "22px" }}
        variant="contained"
      >
        Submit <ChevronRight />{" "}
      </ColorButton>
    </Box>
  );
};

export default Create;
