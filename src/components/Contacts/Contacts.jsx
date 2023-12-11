import PropTypes from "prop-types";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import maLogo from "./../../assets/maLogo.svg";
import { Box, Divider, Typography } from "@mui/material";
import "./Contacts.css";
import { motion } from "framer-motion";
import EaseAppearMotion from "../Animations/AppearAnimation";
import { SubTitleText, TitleText } from "../../utils/utils";

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
            <Box display={"inline-flex"} alignItems={"center"}>
              <InstagramIcon />
              <Typography style={{ marginLeft: 5 }}>remarkable.mkt</Typography>
            </Box>
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
          </Box>
          <SubTitleText style={{ textDecoration: "underline", marginTop: "2rem" }}>Office</SubTitleText>
          <Box className="text-container">
            <MapsHomeWorkIcon />
            <Typography style={{ marginLeft: 5 }}>
              Rua do Calvário, 4580-130 Paredes
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "white" }} />
          <Typography>
            ©2023 Remarkablemkt. All rights reserved
          </Typography>
        </Box>
        {/* <EaseAppearMotion>
          <a href="https://instagram.com/remarkable.mkt" target="_blank">
            <img
              src={maLogo}
              className="logoContact remarkable"
              alt="Remarkable logoContact"
            />
          </a>
        </EaseAppearMotion> */}
      </Box>
    </div>
  );
};

Contacts.proptypes = {};

export default Contacts;
