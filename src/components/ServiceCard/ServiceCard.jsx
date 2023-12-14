import PropTypes from "prop-types";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import useIsMobile, { CardText, CardTitleText, ServiceCardText } from "../../utils/utils";
import ReactCardFlip from "react-card-flip";
import "./ServiceCard.css";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import { remarkableRed } from "../../utils/colors";

const ServiceCard = ({ name, icon, description, last, hidden, wide }) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  function handleClick(e) {
    e.preventDefault();
    setIsHovered(!isHovered);
  }

  const isMobile = useIsMobile();
  return (
    <Box
    // onMouseOver={handleMouseOver}
    // onMouseOut={handleMouseOut}
    >
      <ReactCardFlip
        // onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
        isFlipped={isHovered}
        flipDirection="horizontal"
        flipSpeedBackToFront="1"
        flipSpeedFrontToBack="1"
      >
        <Box
          className="service-card-box service-card-content"
          sx={{
            width: wide && (!isMobile ? 1060 : 300),
            mr: !last && 2,
            visibility: hidden && "hidden",
          }}
        >
          <img src={icon} className="service" alt="Service marketingdigital" />
          <CardTitleText sx={{ color: "black" }} align="center" variant="h5">
            {name}
          </CardTitleText>
          <ThreeSixtyIcon
            className="rotate-button"
            onClick={handleClick}
          ></ThreeSixtyIcon>
        </Box>
        <Box
          className="service-card-content"
          sx={{
            width: wide && (!isMobile ? 1060 : 300),
            mr: !last && 2,
            visibility: hidden && "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <ServiceCardText
            width="100%"
            variant="p"
            align="justify"
            color="black"
          >
            {description}
          </ServiceCardText>
          <ThreeSixtyIcon
            className="rotate-button"
            onClick={handleClick}
          ></ThreeSixtyIcon>
        </Box>
      </ReactCardFlip>
    </Box>
  );
};

ServiceCard.proptypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceCard;
