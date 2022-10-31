import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import FinalScreen from "./pages/FinalScreen";
import Questions from "./pages/Questions";
import Header from "./pages/Header";

import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
