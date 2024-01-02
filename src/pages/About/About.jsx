import PropTypes from "prop-types";
import mission from "./../../assets/mission.svg";
import vision from "./../../assets/vision.svg";
import values from "./../../assets/values.svg";
import { Box, Typography } from "@mui/material";
import Contacts from "../../components/Contacts/Contacts";
import {
  LongText,
  SubLongText,
  SubTitleText,
  TitleText,
} from "../../utils/utils";
import "./About.css";
import "../../components/Animations/LightBackground/LightBackground.css";
import EaseAppearMotion from "../../components/Animations/AppearAnimation";
import EaseInAnimation from "../../components/Animations/EaseInAnimation";
import TextInAnimation from "../../components/Animations/TextInAnimation";
import LightBackground from "../../components/Animations/LightBackground/LightBackground";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useState } from "react";
import { textValues } from "./values";
import { motion, AnimatePresence } from "framer-motion";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";

const arrayContent = [
  { value: "MISSÃO", image: mission, text: textValues[0] },
  { value: "VALORES", image: values, text: textValues[2] },
  { value: "VISÃO", image: vision, text: textValues[1] },
];
const xValue = 500;
const variants = {
  initial: (direction) => {
    return {
      x: direction < 0 ? -xValue : xValue,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? xValue : -xValue,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 400;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const About = () => {
  const [direction, setDirection] = useState(0);
  const [selected, setSelected] = useState(0);

  const handleSelectNext = () => {
    selected != 0 ? setSelected(selected - 1) : setSelected(2);
    console.log("previous selected: " + selected);
    console.log("previous direction: " + direction);
    setDirection(-1);
  };
  const handleSelectPrevious = () => {
    selected != 2 ? setSelected(selected + 1) : setSelected(0);
    console.log("previous selected: " + selected);
    console.log("previous direction: " + direction);
    setDirection(1);
  };

  return (
    <div
      className="about-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <LightBackground zIndex={-1} />
      <Box className="about-upper-container">
        <TitleText variant="h1">A NOSSA HISTÓRIA</TitleText>
        <EaseAppearMotion>
          <SubLongText style={{ textAlign: "center" }} variant="h6">
            A reMArkable surge de um desejo e de uma visão de dois irmãos que
            apesar da sua significativa diferença de idades, partilham da mesma
            paixão na criação de dinâmicas empresariais e exploração do
            networking. Com estágios de experiência díspares aliamos a
            criatividade de um recém formado, com o percurso profissional de
            mais de 15 anos de um gestor empresarial, ambicionando, em cada
            projeto, tirar partido das melhores capacidades de cada um e evoluir
            com cada cliente e parceiro. É neste processo de partilha de
            conhecimento e experiência que acreditamos, conectando empresas e
            pessoas e estando presente em cada fase da sua jornada. Não somos
            apenas uma agência de Marketing, somos uma rede de networking.
          </SubLongText>
        </EaseAppearMotion>
      </Box>
      <div className="values-container">
        <Box className="values-box-container">
          <div>
            <button onClick={handleSelectPrevious} className="arrow">
              <KeyboardDoubleArrowLeftIcon fontSize="large" />
            </button>
          </div>
          <motion.div
            key={selected}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                handleSelectPrevious();
              } else if (swipe > swipeConfidenceThreshold) {
                handleSelectNext();
              }
            }}
            className="values-info"
          >
            <div className="header-value heart-beat">
              <SubTitleText variant="h3" sx={{ color: "white" }}>
                {arrayContent[selected].value}
              </SubTitleText>
              <img
                src={arrayContent[selected].image}
                className="about remarkable"
                alt="Remarkable about"
              />
            </div>
            <TextInAnimation>
              <LongText className="text-value">
                {arrayContent[selected].text}
              </LongText>
            </TextInAnimation>
          </motion.div>
          <div>
            <button onClick={handleSelectNext} className="arrow">
              <KeyboardDoubleArrowRightIcon fontSize="large" />
            </button>
          </div>
        </Box>
      </div>
      <FaqAccordion />
      <Contacts />
    </div>
  );
};

About.proptypes = {};

export default About;
