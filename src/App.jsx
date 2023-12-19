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
            <Route path="remarkable" index element={<Home />} />
            <Route path="remarkable/about" element={<About />} />
            <Route path="remarkable/services" element={<Services />} />
            <Route path="remarkable/portfolio" element={<Portfolio />} />
            <Route path="remarkable/partners" element={<Partners />} />
            <Route path="remarkable/*" element={<NoPage />} />
          </Routes>
        </Box>
        <ScrollTop/>
      </BrowserRouter>
    </>
  );
}

export default App;
