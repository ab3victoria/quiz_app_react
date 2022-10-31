import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";
import { handleScoreChange } from "../redux/actions";



const Header = () => {
  

  return (
    <Box>
      <Typography variant="h4">Trivia Game </Typography>
      
    </Box>
  );
};

export default Header;