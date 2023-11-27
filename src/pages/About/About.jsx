import PropTypes from "prop-types";
import mission from "./../../assets/mission.svg";
import vision from "./../../assets/vision.svg";
import values from "./../../assets/values.svg";
import { Box, Typography } from "@mui/material";
import Contacts from "../../components/Contacts/Contacts";
import { LongText, TitleText } from "../../utils/utils";
import "./About.css";

const About = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Box margin="0 15rem">
        <TitleText variant="h1">A NOSSA HISTÓRIA</TitleText>
        <LongText align="center" variant="h5" margin="2rem">
          Em junho de 2023, começa a nossa apaixonante jornada neste mundo que é
          tão competitivo. A reMArkable é uma agência de Marketing focada em
          resultados e em tornar negócios e marcas em algo diferente e notável.
          Queremos ajudá-lo a entrar na rua mais movimentada do mundo, a
          "Internet", da melhor forma, para que se consiga diferenciar da sua
          concorrência. Somos apaixonados pelo nosso trabalho e cada desafio
          motivanos a ser melhores. Adoramos trabalhar em equipa, porque é na
          discussão e ligação de vários pensamentos e ideias que surgem grandes
          estratégias. Os nossos Brainstorms são de outro mundo! As nossas
          quintas-feiras de tarde são focadas em atividades de Teambuilding.
          Isto porque somos uma equipa reMArkable, e só assim é que conseguimos
          tornar os nossos parceiros/clientes reMArkable.
        </LongText>
      </Box>
      <div style={{ backgroundColor: "white" }}>
        <Box
          margin="2rem 15rem"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          bgcolor="white"
        >
          <Box
            margin="2rem"
            maxWidth="350px"
            display="flex"
            flexDirection="column"
          >
            <TitleText variant="h3" sx={{ color: "black" }}>
              MISSÃO
            </TitleText>
            <img
              src={mission}
              className="about remarkable"
              alt="Remarkable about"
            />
            <h4 style={{ color: "black" }}>
              A nossa missão é ajudar-te a ti! Queremos que o teu negocio seja o
              negócio. Vamos ajudar-te a alcançar os teus objetivos.
            </h4>
          </Box>
          <Box
            margin="2rem"
            maxWidth="350px"
            display="flex"
            flexDirection="column"
          >
            <TitleText variant="h3" sx={{ color: "black" }}>
              VISÃO
            </TitleText>
            <img
              src={vision}
              className="about remarkable"
              alt="Remarkable about"
            />
            <h4 style={{ color: "black" }}>
              Somos uma empresa focada em empresas. O digital não é o futuro, é
              o presente. Connosco tem soluções 360.
            </h4>
          </Box>
          <Box
            margin="2rem"
            maxWidth="350px"
            display="flex"
            flexDirection="column"
          >
            <TitleText variant="h3" sx={{ color: "black" }}>
              VALORES
            </TitleText>
            <img
              src={values}
              className="about remarkable"
              alt="Remarkable about"
            />
            <h4 style={{ color: "black" }}>
              Eticamente somos fortíssimos, leais, trabalhadores e
              perfecionistas. Queremos ter um impacto enorme no seu trabalho.
            </h4>
          </Box>
        </Box>
      </div>
      <Contacts />
      <video
        className="bg-video"
        src="/videos/video-10.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

About.proptypes = {};

export default About;
