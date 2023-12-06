import letteringLogo from "./../../assets/letteringLogo.svg";
import { Outlet, Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ContactButton } from "./NavBarMui";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./NavBar.css";

const NavBar = ({}) => {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => {
    window.scrollTo(0, 0);
    setClick(false);
  };

  const handleClick = () => setClick(!click);

  return (
    <Box className="navBarBox">
      <Box className="navBarBoxInner">
        <a href="#top">
          <img
            src={letteringLogo}
            className="logo remarkable"
            alt="Remarkable logo"
          />
        </a>
        
        <Box>
          <nav className={click ? "navMenu active" : "navMenu"}>
            <Link className="link" to="/remarkable" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link className="link" to="/remarkable/about" onClick={closeMobileMenu}>
              Sobre
            </Link>
            <Link
              className="link"
              to="remarkable/services"
              onClick={closeMobileMenu}
            >
              Serviços
            </Link>
            <Link
              className="link"
              to="remarkable/portfolio"
              onClick={closeMobileMenu}
            >
              Portefólio
            </Link>
            <ContactButton href="#contacts" onClick={closeMobileMenu}>
              <Typography>Contactos</Typography>
            </ContactButton>
          </nav>
          <Outlet />
        </Box>
        <Box className="menuIcon" onClick={handleClick}>
          {click ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </Box>
      </Box>
    </Box>
  );
};

NavBar.proptypes = {};

export default NavBar;
