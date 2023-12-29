import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import Partners from "./pages/Partners/Partners";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  return (
    <>
      <BrowserRouter style={{ display: "flex" }}>
        <NavBar />
        <Box style={{ width: "100%", marginTop: "7rem" }}>
          <Routes>
            <Route path="" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </Box>
        <ScrollTop/>
      </BrowserRouter>
    </>
  );
}

export default App;
