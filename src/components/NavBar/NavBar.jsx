import letteringLogo from "./../../assets/letteringLogo.svg";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ContactButton } from "./NavBarMui";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./NavBar.css";
import { CardText, NavText, UnderlinedNavText } from "../../utils/utils";

const useUnderline = (path, text, location) => {
  return location.pathname === path ? (
    <UnderlinedNavText>{text}</UnderlinedNavText>
  ) : (
    <NavText>{text}</NavText>
  );
};

const NavBar = ({}) => {
  const location = useLocation();
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
              {useUnderline("/", "HOME", location)}
            </Link>
            <Link className="link" to="/about" onClick={closeMobileMenu}>
              {useUnderline("/about", "ADN", location)}
            </Link>
            <Link className="link" to="/services" onClick={closeMobileMenu}>
              {useUnderline("/services", "SERVIÇOS", location)}
            </Link>
            <Link className="link" to="/portfolio" onClick={closeMobileMenu}>
              {useUnderline("/portfolio", "PORTFOLIO", location)}
            </Link>
            <Link className="link" to="/partners" onClick={closeMobileMenu}>
              {useUnderline("/partners", "NETWORKING", location)}
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
