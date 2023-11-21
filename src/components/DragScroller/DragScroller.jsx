import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Box } from "@mui/material";
import styles from "./DragScroller.module.scss";
import { TitleText } from "../../utils/utils";
import imagesFit from "../../assets/Fitness";
import imagesEng from "../../assets/Engenharia";
import imagesImo from "../../assets/Imobiliário";
import imagesRet from "../../assets/Retalho";
import imagesSau from "../../assets/Saude";

const DragScroller = ({ title, background, icon }) => {
  return (
    <div className="container">
      <Box className={styles.boxContainer} sx={{ backgroundColor: background }}>
        <Box className={styles.boxLeft}>
          <TitleText className={styles.heading} variant="h5">
            {title}
          </TitleText>
          <img src={icon} className={styles.cardIcon} alt="saude_icon" />
        </Box>

        {title === "FITNESS" ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            slidesPerView={6}
            style={{ marginRight: "3rem" }}
          >
            {Object.values(imagesFit).map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    className={styles.sliderImage}
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
            slidesPerView={6}
            style={{ marginRight: "3rem" }}
          >
            <SwiperSlide>
              <img
                src={imagesEng.engenharia2}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesEng.engenharia3}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesEng.engenharia2}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesEng.engenharia1}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesEng.engenharia2}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesEng.engenharia3}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesEng.engenharia1}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
          </Swiper>
        ) : title === "IMOBILIÁRIO" ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            slidesPerView={6}
            style={{ marginRight: "3rem" }}
          >
            <SwiperSlide>
              <img
                src={imagesImo.imobiliario1}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesImo.imobiliario2}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesImo.imobiliario3}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesImo.imobiliario4}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesImo.imobiliario5}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesImo.imobiliario6}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesImo.imobiliario3}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
          </Swiper>
        ) : title === "RETALHO" ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            slidesPerView={6}
            style={{ marginRight: "3rem" }}
          >
            <SwiperSlide>
              <img
                src={imagesRet.retalho1}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesRet.retalho2}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesRet.retalho3}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesRet.retalho4}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesRet.retalho5}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesRet.retalho6}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesRet.retalho3}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
          </Swiper>
        ) : title === "SAÚDE" ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            slidesPerView={6}
            style={{ marginRight: "3rem" }}
          >
            <SwiperSlide>
              <img
                src={imagesSau.saude1}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesSau.saude2}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesSau.saude3}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesSau.saude4}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesSau.saude1}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesSau.saude2}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesSau.saude3}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
          </Swiper>
        ) : (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            slidesPerView={6}
            style={{ marginRight: "3rem" }}
          >
            <SwiperSlide>
              <img
                src={imagesEng.engenharia2}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesEng.engenharia3}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesEng.engenharia2}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesEng.engenharia1}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesEng.engenharia2}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesEng.engenharia3}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imagesEng.engenharia1}
                className={styles.sliderImage}
                alt="slide_image"
              />
            </SwiperSlide>
          </Swiper>
        )}
      </Box>
    </div>
  );
};
DragScroller.proptypes = {
  title: PropTypes.string,
};
export default DragScroller;
