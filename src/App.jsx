import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Services from "./pages/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Box style={{ width: "100%", marginTop: "10rem" }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
