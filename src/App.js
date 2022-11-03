import { createTheme,ThemeProvider } from "@mui/material";
import { Box, Container } from "@mui/system";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { orange } from "@mui/material/colors";

import FinalScreen from "./pages/FinalScreen";
import Questions from "./pages/Questions";
import Header from "./pages/Header";

import Settings from "./pages/Settings";




function App() {
  // const theme = createTheme({
  //   palette: {
  //     mode:"dark",
  //     primary: {
  //       main: orange[500]
  //     }
  //   }
  // })
  return (
    <Router>
      {/* <ThemeProvider theme={theme}> */}
      <Box textAlign="center"><Header/></Box>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
        <Routes>
          <Route path='/' exact element={<Settings/>}>
          </Route>
          <Route path='/questions'  element={<Questions/>} />
          <Route path='/score' element={<FinalScreen/>} />
          </Routes>
        </Box>
      </Container>
      {/* </ThemeProvider> */}
    </Router>
  );
}

export default App;
