import "./App.css";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Box style={{ width: "100%", marginTop: "100px" }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
