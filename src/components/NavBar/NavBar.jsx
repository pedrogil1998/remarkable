import letteringLogo from "./../../assets/letteringLogo.svg";
import { Outlet, Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import styles from "./NavBar.module.scss";
import { ContactButton } from "./NavBarMui";

const NavBar = ({}) => {
  return (
    <Box className={styles.navBarBox}>
      <Box className={styles.navBarBoxInner}>
        <a href="https://instagram.com/remarkable.mkt" target="_blank">
          <img
            src={letteringLogo}
            className="logo remarkable"
            alt="Remarkable logo"
          />
        </a>
        <Box>
          <nav className={styles.navComponent}>
            <Link className={styles.link} to="/">
              Home
            </Link>
            <Link className={styles.link} to="/about">
              Sobre
            </Link>
            <Link className={styles.link} to="/services">
              Serviços
            </Link>
            <Link className={styles.link} to="/error">
              Portefólio
            </Link>
            <ContactButton href="#contacts">
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
