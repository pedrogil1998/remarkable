import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Box } from "@mui/material";
import useIsMobile, { TitleText } from "../../utils/utils";
import imagesFit from "../../assets/Fitness";
import imagesEng from "../../assets/Engenharia";
import imagesImo from "../../assets/Imobiliário";
import imagesRet from "../../assets/Retalho";
import imagesSau from "../../assets/Saude";
import "./DragScroller.css";
import { useEffect, useState } from "react";

const DragScroller = ({ title, background, icon }) => {
  const isMobile = useIsMobile();
  return (
    <div className="container">
      <Box className="boxContainer" sx={{ backgroundColor: background }}>
        <Box className="box-left">
          <TitleText className="heading" variant="h5">
            {title}
          </TitleText>
        </Box>

        {title === "FITNESS" ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            slidesPerView={3}
            className="swiper"
          >
            {Object.values(imagesFit).map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    className="sliderImage"
                    alt="slide_image"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : title === "ENGENHARIA" ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            slidesPerView={3}
            className="swiper"
          >
            {Object.values(imagesEng).map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    className="sliderImage"
                    alt="slide_image"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : title === "IMOBILIÁRIO" ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            slidesPerView={3}
            className="swiper"
          >
            {Object.values(imagesImo).map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    className="sliderImage"
                    alt="slide_image"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : title === "RETALHO" ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            slidesPerView={3}
            className="swiper"
          >
            {Object.values(imagesRet).map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    className="sliderImage"
                    alt="slide_image"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : title === "SAÚDE" ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            slidesPerView={3}
            className="swiper"
          >
            {Object.values(imagesSau).map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    className="sliderImage"
                    alt="slide_image"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            slidesPerView={3}
            className="swiper"
          >
            {Object.values(imagesEng).map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    className="sliderImage"
                    alt="slide_image"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
        <img src={icon} className="cardIcon" alt="saude_icon" />
      </Box>
    </div>
  );
};
DragScroller.proptypes = {
  title: PropTypes.string,
};
export default DragScroller;
