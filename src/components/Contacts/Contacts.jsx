import PropTypes from "prop-types";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import letteringLogo1 from "./../../assets/letteringLogo1.svg";
import { Box, Typography } from "@mui/material";
import "./Contacts.css";
import EaseAppearMotion from "../Animations/AppearAnimation";
import { TitleText } from "../../utils/utils";

const Contacts = () => {
  return (
    <div id="contacts">
      <Box
        className="contacts-container"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box className="office-container">
          <TitleText>Contactos</TitleText>
          <Box display={"flex"} flexDirection={"column"}>
          <a
              className="instagram-container"
              href="https://instagram.com/remarkable.mkt"
              target="_blank"
            >
              <InstagramIcon />
              <Typography style={{ marginLeft: 5 }}>remarkable.mkt</Typography>
            </a>
            <Box display={"inline-flex"} alignItems={"center"}>
              <EmailIcon />
              <Typography style={{ marginLeft: 5 }}>
                geral@remarkablemkt.pt
              </Typography>
            </Box>
            <Box display={"inline-flex"} alignItems={"center"}>
              <PhoneCallbackIcon />
              <Typography style={{ marginLeft: 5 }}>
                +351 917 264 157
              </Typography>
            </Box>
            <a
              className="instagram-container"
              href="https://maps.app.goo.gl/VVvcvGYDYmVCLo287"
              target="_blank"
            >
              <MapsHomeWorkIcon />
              <Typography  style={{ marginLeft: 5 }}>
                Rua do Calvário, 4580-130 Paredes
              </Typography>
            </a>
          </Box>
        </Box>
        <Box className="office-container">
          <EaseAppearMotion>
            <a href="https://instagram.com/remarkable.mkt" target="_blank">
              <img
                src={letteringLogo1}
                className="logoContact remarkable"
                alt="Remarkable logoContact"
              />
            </a>
          </EaseAppearMotion>
        </Box>
      </Box>
    </div>
  );
};

Contacts.proptypes = {};

export default Contacts;
