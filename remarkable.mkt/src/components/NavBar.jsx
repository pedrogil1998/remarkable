import PropTypes from "prop-types";
import letteringLogo from "./../assets/letteringLogo.svg";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Link = styled(RouterLink)((props) => ({
  color: "white",
  marginRight: "1rem",
  textDecoration: "none",
}));

const NavBar = ({}) => {
  return (
    <Box
      style={{
        position: "fixed",
        top: 0,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        width: "100%",
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <a href="https://instagram.com/remarkable.mkt" target="_blank">
          <img
            src={letteringLogo}
            className="logo remarkable"
            alt="Remarkable logo"
          />
        </a>
        <Box>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link>
            <Link to="/services">Serviços</Link>
            <Link to="/error">Portefólio</Link>
            <a
              href="#contacts"
              style={{
                color: "white",
                marginRight: "1rem",
                textDecoration: "none",
              }}
            >
              Contactos
            </a>
          </nav>

          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

NavBar.proptypes = {};

export default NavBar;
