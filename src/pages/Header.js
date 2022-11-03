import { createTheme, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { orange } from "@mui/material/colors";


const Header = () => {
  
  const theme = createTheme({
    palette: {
      mode:"dark",
      primary: {
        main: orange[500]
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
    <Box>
      <Typography variant="h2" color="primary">Trivia Game </Typography>
      
    </Box>
    </ThemeProvider>
  );
};

export default Header;