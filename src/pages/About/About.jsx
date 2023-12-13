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
import EaseAppearMotion from "../../components/Animations/AppearAnimation";
import EaseInAnimation from "../../components/Animations/EaseInAnimation";
import TextInAnimation from "../../components/Animations/TextInAnimation";

const About = () => {
  return (
    <div
      className="about-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
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
          <Box className="values-box">
            <EaseInAnimation>
              <div className="header-value">
                <SubTitleText variant="h3" sx={{ color: "white" }}>
                  MISSÃO
                </SubTitleText>
                <img
                  src={mission}
                  className="about remarkable"
                  alt="Remarkable about"
                />
              </div>
            </EaseInAnimation>
            <TextInAnimation>
              <h4 className="text-value">
                {
                  "Fazer parte do crescimento e mudança dos nossos Clientes/Parceiros. Com a nossa visão 360 nos negócios, queremos acrescentar valor ao mercado e as empresas que confiam em nós diariamente. Somos a ponte que conecta diretores a colaboradores e empresas a pessoas, não somos só uma agência de Marketing, somos o seu Departamento de Marketing, capacitados a tornar a sua empresa notável, aplicando estratégias que irão não só melhorar a sua presença e posição no mercado, como também o espirito de equipa e o amor á camisola dos seus colaboradores."
                }
              </h4>
            </TextInAnimation>
          </Box>
          <Box className="values-box">
            <EaseInAnimation delay={0.4}>
              <div className="header-value">
                <SubTitleText variant="h3" sx={{ color: "white" }}>
                  VISÃO
                </SubTitleText>
                <img
                  src={vision}
                  className="about remarkable"
                  alt="Remarkable about"
                />
              </div>
            </EaseInAnimation>
            <h4 className="text-value">
              {
                "A nossa visão passa por nos tornarmos um parceiro de negócio das empresas/marcas que precisem de revolucionar o mercado, entregando um serviço com uma visão 360º para dar o apoio necessário a qualquer negócio. Pretendemos que quem confia em nós, apenas se preocupe com o core business da sua marca, nós iremos ser a ponte para tudo o resto."
              }
            </h4>
          </Box>
          <Box className="values-box">
            <EaseInAnimation >
              <div className="header-value">
                <SubTitleText variant="h3" sx={{ color: "white" }}>
                  VALORES
                </SubTitleText>
                <img
                  src={values}
                  className="about remarkable"
                  alt="Remarkable about"
                />
              </div>
            </EaseInAnimation>
            <h4 className="text-value">
              {
                "Os nossos valores moldam cada interação, cada estratégia e cada trabalho que entregamos, somos movidos pela ânsia de inovar, pela transparencia em quem confia em nós e pela orientação de resultados."
              }
            </h4>
          </Box>
        </Box>
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      </div>
      <Contacts />
      {/* <video
        className="bg-video"
        src="/videos/video-10.mp4"
        autoPlay
        loop
        muted
      ></video> */}
    </div>
  );
};

About.proptypes = {};

export default About;
