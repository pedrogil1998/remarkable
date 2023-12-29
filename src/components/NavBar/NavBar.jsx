import letteringLogo from "./../../assets/letteringLogo.svg";
import { Outlet, Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ContactButton } from "./NavBarMui";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./NavBar.css";
import { CardText, NavText } from "../../utils/utils";

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
        <a href="/">
          <img
            src={letteringLogo}
            className="logo remarkable"
            alt="Remarkable logo"
          />
        </a>

        <Box>
          <nav className={click ? "navMenu active" : "navMenu"}>
            <Link className="link" to="/" onClick={closeMobileMenu}>
              <NavText>HOME</NavText>
            </Link>
            <Link
              className="link"
              to="/about"
              onClick={closeMobileMenu}
            >
              <NavText>ADN</NavText>
            </Link>
            <Link
              className="link"
              to="/services"
              onClick={closeMobileMenu}
            >
              <NavText>SERVIÇOS</NavText>
            </Link>
            <Link
              className="link"
              to="/portfolio"
              onClick={closeMobileMenu}
            >
              <NavText>PORTEFÓLIO</NavText>
            </Link>
            <Link
              className="link"
              to="/partners"
              onClick={closeMobileMenu}
            >
             <NavText>NETWORKING</NavText> 
            </Link>
            <ContactButton href="#contacts" onClick={closeMobileMenu}>
              <CardText>CONTACTOS</CardText>
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
