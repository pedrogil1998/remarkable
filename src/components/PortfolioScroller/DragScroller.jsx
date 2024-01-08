import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Box, Modal } from "@mui/material";
import useIsMobile, { TitleText } from "../../utils/utils";
import imagesFit from "../../assets/Fitness";
import imagesEng from "../../assets/Engenharia";
import imagesImo from "../../assets/Imobiliário";
import imagesRet from "../../assets/Retalho";
import imagesSau from "../../assets/Saude";
import imagesOutros from "../../assets/Outros";
import "./DragScroller.css";
import { useState } from "react";

const DragScroller = ({ title, background, icon }) => {
  const [open, setOpen] = useState({ item: null, open: false });

  const isMobile = useIsMobile();

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      {open.item && (
        <Modal
          open={open.open}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-portfolio">
            {<img className="modal-image" src={open.item} />}
          </Box>
        </Modal>
      )}
      <Box className="boxContainer" sx={{ backgroundColor: background }}>
        <img src={icon} className="cardIcon" alt="saude_icon" />
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
                    onClick={() =>
                      setOpen({ item: image, open: isMobile ? true : false })
                    }
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
                    onClick={() =>
                      setOpen({ item: image, open: isMobile ? true : false })
                    }
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
                    onClick={() =>
                      setOpen({ item: image, open: isMobile ? true : false })
                    }
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : title === "SETOR AUTOMÓVEL" ? (
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
                    onClick={() =>
                      setOpen({ item: image, open: isMobile ? true : false })
                    }
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
                    onClick={() =>
                      setOpen({ item: image, open: isMobile ? true : false })
                    }
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : title === "OUTROS PROJETOS" ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            slidesPerView={3}
            className="swiper"
          >
            {Object.values(imagesOutros).map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    className="sliderImage"
                    alt="slide_image"
                    onClick={() =>
                      setOpen({ item: image, open: isMobile ? true : false })
                    }
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
                    onClick={() =>
                      setOpen({ item: image, open: isMobile ? true : false })
                    }
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        <Box className="box-left">
          <TitleText className="heading" variant="h5">
            {title}
          </TitleText>
        </Box>
      </Box>
    </div>
  );
};

DragScroller.propTypes = {
  title: PropTypes.string,
  background: PropTypes.string,
  icon: PropTypes.any,
};

export default DragScroller;
