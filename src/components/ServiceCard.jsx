import PropTypes from "prop-types";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { CardText, CardTitleText } from "../utils/utils";

const ServiceCard = ({ name, icon, description, last, hidden, wide }) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }
  return (
    <Card
      className="serviceCard"
      sx={{
        borderRadius: 10,
        minWidth: wide ? 1300 : 500,
        maxWidth: wide ? 1300 : 500,
        mr: !last && 2,
        visibility: hidden && "hidden",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <CardContent
        className="serviceCardInner"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "1rem",
        }}
      >
        {isHovered ? (
          <CardText className="serviceCardBack" width="100%" variant="h7" align="justify" color="text.secondary">
            {description}
          </CardText>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            sx={{ mb: 1.5 }}
          >
            <img
              src={icon}
              className="service"
              alt="Service marketingdigital"
            />
            <CardTitleText align="center" variant="h5">
              {name}
            </CardTitleText>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

ServiceCard.proptypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceCard;
