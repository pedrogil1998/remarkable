import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import "./CompanyInfo.css";
import { SubTitleText } from "../../../utils/utils";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const CompanyInfo = ({ item }) => {
  const {
    image = "",
    title = "",
    description = "",
    services = [],
    address = "",
    addressLink = "",
    phone = "",
    sliderImages = [],
  } = item;

  const [imageIndex, setImageIndex] = useState(0);

  const slideLeft = (e) => {
    e.preventDefault();
    setImageIndex((index) => {
      if (index === 0) return sliderImages.length - 1;
      return index - 1;
    });
  };

  const slideRight = (e) => {
    e.preventDefault();
    setImageIndex((index) => {
      if (index === sliderImages.length - 1) return 0;
      return index + 1;
    });
  };
  return (
    <Box className="info-box">
      <div className="left-box">
        {sliderImages.length ? (
          <div className={"img-slider-div"}>
            {sliderImages.map((src) => (
              <img
                key={src}
                src={src}
                className="image-slider"
                style={{ translate: `${-100 * imageIndex}%` }}
              ></img>
            ))}
            <button
              onClick={(e) => slideLeft(e)}
              className="img-slider-button img-left"
            >
              <ArrowBackIosIcon fontSize="large" />
            </button>
            <button
              onClick={(e) => slideRight(e)}
              className="img-slider-button img-right"
            >
              <ArrowForwardIosIcon fontSize="large" />
            </button>
          </div>
        ) : (
          <div className="left-box-noslider">
            <img className="image-company" src={image}></img>
          </div>
        )}
      </div>
      <Box className="right-box">
        <SubTitleText className="company-title" variant="h3" color="white" marginTop="1rem">
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
        {address &&
          <a
            className="instagram-container contact"
            href={addressLink}
            target="_blank"
          >
            <MapsHomeWorkIcon />
            <Typography style={{ marginLeft: 5 }}>{address}</Typography>
          </a>
        }
      </Box>
    </Box>
  );
};

CompanyInfo.propTypes = {
  item: PropTypes.object,
};

export default CompanyInfo;
