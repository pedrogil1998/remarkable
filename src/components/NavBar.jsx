import PropTypes from "prop-types";
import letteringLogo from "./../assets/letteringLogo.svg";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { remarkableRed } from "../utils/colors";

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
          <nav style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link>
            <Link to="/services">Serviços</Link>
            <Link to="/error">Portefólio</Link>
            {/* <Box
              sx={{
                width: "fit-content",
                borderRadius: "5px",
                backgroundColor: remarkableRed,
                marginRight: "1rem",
              }}
            >
              <a
                href="#contacts"
                style={{
                  color: "white",
                  margin: "1rem",
                  textDecoration: "none",
                }}
              >
                Contactos
              </a>
            </Box> */}

            <Button
              sx={{
                width: "fit-content",
                borderRadius: "5px",
                backgroundColor: remarkableRed,
                marginRight: "1rem",
                color: "white",
                textTransform: "none",
              }}
              href="#contacts"
            >
              <Typography>Contactos</Typography>
            </Button>
          </nav>

          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

NavBar.proptypes = {};

export default NavBar;
