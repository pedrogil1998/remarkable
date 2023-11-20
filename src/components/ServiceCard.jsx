import PropTypes from "prop-types";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { CardText, CardTitleText } from "../utils/utils";
import ReactCardFlip from "react-card-flip";

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

  return (
    <Box onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <ReactCardFlip
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        isFlipped={isHovered}
        flipDirection="horizontal"
        flipSpeedBackToFront="1"
        flipSpeedFrontToBack="1"
      >
        <Box
          padding="2rem"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          width="100%"
          sx={{
            borderRadius: 10,
            minWidth: wide ? 1300 : 450,
            maxWidth: wide ? 1300 : 450,
            minHeight: 250,
            mr: !last && 2,
            visibility: hidden && "hidden",
            backgroundColor: "white",
          }}
        >
          <img src={icon} className="service" alt="Service marketingdigital" />
          <CardTitleText sx={{ color: "black" }} align="center" variant="h5">
            {name}
          </CardTitleText>
        </Box>
        <Box
          padding="2rem"
          justifyContent="space-around"
          sx={{
            borderRadius: 10,
            minWidth: wide ? 1300 : 450,
            maxWidth: wide ? 1300 : 450,
            minHeight: 250,
            mr: !last && 2,
            visibility: hidden && "hidden",
            backgroundColor: "white",
          }}
        >
          <CardText
            width="100%"
            variant="h7"
            align="justify"
            color="text.secondary"
          >
            {description}
          </CardText>
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
