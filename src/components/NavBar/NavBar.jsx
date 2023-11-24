import letteringLogo from "./../../assets/letteringLogo.svg";
import { Outlet, Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import styles from "./NavBar.module.scss";
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
    <Box className={styles.navBarBox}>
      <Box className={styles.navBarBoxInner}>
        <a href="#top">
          <img
            src={letteringLogo}
            className="logo remarkable"
            alt="Remarkable logo"
          />
        </a>
        <Box className={styles.menuIcon} onClick={handleClick}>
          {click ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </Box>
        <Box>
          <nav className={click ? "navMenu active" : "navMenu"}>
            <Link className={styles.link} to="/" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link className={styles.link} to="/about" onClick={closeMobileMenu}>
              Sobre
            </Link>
            <Link
              className={styles.link}
              to="/services"
              onClick={closeMobileMenu}
            >
              Serviços
            </Link>
            <Link
              className={styles.link}
              to="/portfolio"
              onClick={closeMobileMenu}
            >
              Portefólio
            </Link>
            <ContactButton
              href="#contacts"
              onClick={closeMobileMenu}
            >
              <Typography>Contactos</Typography>
            </ContactButton>
          </nav>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

NavBar.proptypes = {};

export default NavBar;
