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
              <p style={{ marginLeft: 5 }}>remarkable.mkt</p>
            </Box>
            <Box display={"inline-flex"} alignItems={"center"}>
              <EmailIcon />
              <p style={{ marginLeft: 5 }}>remarkable.mkt@gmail.com</p>
            </Box>
            <Box display={"inline-flex"} alignItems={"center"}>
              <PhoneCallbackIcon />
              <p style={{ marginLeft: 5 }}>+351 917 264 157</p>
            </Box>
          </Box>
          <h2 style={{ textDecoration: "underline" }}>Office</h2>
          <Box display={"inline-flex"} alignItems={"center"}>
            <MapsHomeWorkIcon />
            <p style={{ marginLeft: 5 }}>
              Rua do Calvário, 4580-130 Paredes
            </p>
          </Box>
        </Box>
        <Box>
          <a href="https://instagram.com/remarkable.mkt" target="_blank">
            <img
              src={maLogo}
              className="logoContact remarkable"
              alt="Remarkable logoContact"
            />
          </a>
        </Box>
      </Box>
    </div>
  );
};

Contacts.proptypes = {};

export default Contacts;
