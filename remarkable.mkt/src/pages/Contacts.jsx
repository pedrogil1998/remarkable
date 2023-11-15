import PropTypes from "prop-types";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import maLogo from "./../assets/maLogo.svg";

import { Box } from "@mui/material";

const Contacts = () => {
  return (
    <div id="contacts">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        style={{ margin: "0 5rem", textAlign: "left" }}
      >
        <Box>
          <h1>Contactos</h1>
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"inline-flex"} alignItems={"center"}>
              <InstagramIcon />
              <text style={{ marginLeft: 5 }}>remarkable.mkt</text>
            </Box>
            <Box display={"inline-flex"} alignItems={"center"}>
              <EmailIcon />
              <text style={{ marginLeft: 5 }}>remarkable.mkt@gmail.com</text>
            </Box>
            <Box display={"inline-flex"} alignItems={"center"}>
              <PhoneCallbackIcon />
              <text style={{ marginLeft: 5 }}>+351 917 264 157</text>
            </Box>
          </Box>
          <h2 style={{ textDecoration: "underline" }}>Office</h2>
          <Box display={"inline-flex"} alignItems={"center"}>
            <MapsHomeWorkIcon />
            <text style={{ marginLeft: 5 }}>
              Rua do Calvário, 4580-130 Paredes
            </text>
          </Box>
        </Box>
        <Box>
          <a href="https://instagram.com/remarkable.mkt" target="_blank">
            <img
              src={maLogo}
              className="contact remarkable"
              alt="Remarkable contact"
            />
          </a>
        </Box>
      </Box>
    </div>
  );
};

Contacts.proptypes = {};
export default Contacts;
