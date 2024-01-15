import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import "./CompanyInfo.css";
import { SubTitleText } from "../../../utils/utils";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

const CompanyInfo = ({ item }) => {
  const {
    image = "",
    title = "",
    description = "",
    services = [],
    address = "",
    addressLink = "",
    phone = "",
  } = item;
  return (
    <Box className="info-box">
      <img src={image}></img>
      <Box className="right-box">
        <SubTitleText
          variant="h3"
          color="white"
          align="center"
          marginTop="1rem"
        >
          {title}
        </SubTitleText>
        <Typography sx={{ mt: "2rem" }} color="lightgray" align="justify">
          {description || "Esta empresa confia na reMArkable."}
        </Typography>
        {services.map((service) => {
          return (
            <Typography
              key={service}
              sx={{ mt: "1rem" }}
              color="lightgray"
              align="justify"
            >
              <li>{service}</li>
            </Typography>
          );
        })}
        <Box className="contact" display={"inline-flex"} alignItems={"center"}>
          <PhoneCallbackIcon />
          <Typography style={{ marginLeft: 5 }}>{phone}</Typography>
        </Box>
        <a
          className="instagram-container contact"
          href={addressLink}
          target="_blank"
        >
          <MapsHomeWorkIcon />
          <Typography style={{ marginLeft: 5 }}>{address}</Typography>
        </a>
      </Box>
    </Box>
  );
};

CompanyInfo.propTypes = {
  item: PropTypes.object,
};

export default CompanyInfo;
