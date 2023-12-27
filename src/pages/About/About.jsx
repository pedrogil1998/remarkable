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

const About = () => {
  const [selected, setSelected] = useState(0);
  const handleSelectNext = () => {
    selected != 2 ? setSelected(selected + 1) : setSelected(0);
  };
  const handleSelectPrevious = () => {
    selected != 0 ? setSelected(selected - 1) : setSelected(2);
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
          <Box className="values-box">
            <div>
              <button onClick={handleSelectNext} className="arrow">
                <KeyboardDoubleArrowLeftIcon fontSize="large" />
              </button>
            </div>
            {selected == 0 ? (
              <EaseInAnimation key={"mission"}>
                <div className="values-info">
                  <div className="header-value heart-beat">
                    <SubTitleText variant="h3" sx={{ color: "white" }}>
                      MISSÃO
                    </SubTitleText>
                    <img
                      src={mission}
                      className="about remarkable"
                      alt="Remarkable about"
                    />
                  </div>
                  <TextInAnimation>
                    <LongText className="text-value">
                      {
                        "Fazer parte do crescimento e mudança dos nossos Clientes/Parceiros. Com a nossa visão 360 nos negócios, queremos acrescentar valor ao mercado e as empresas que confiam em nós diariamente. Somos a ponte que conecta diretores a colaboradores e empresas a pessoas, não somos só uma agência de Marketing, somos o seu Departamento de Marketing, capacitados a tornar a sua empresa notável, aplicando estratégias que irão não só melhorar a sua presença e posição no mercado, como também o espirito de equipa e o amor á camisola dos seus colaboradores."
                      }
                    </LongText>
                  </TextInAnimation>
                </div>
              </EaseInAnimation>
            ) : selected == 2 ? (
              <EaseInAnimation key={"vision"}>
                <div className="values-info">
                  <div className="header-value heart-beat">
                    <SubTitleText variant="h3" sx={{ color: "white" }}>
                      VISÃO
                    </SubTitleText>
                    <img
                      src={vision}
                      className="about remarkable"
                      alt="Remarkable about"
                    />
                  </div>
                  <TextInAnimation>
                    <LongText className="text-value">
                      {
                        "A nossa visão passa por nos tornarmos um parceiro de negócio das empresas/marcas que precisem de revolucionar o mercado, entregando um serviço com uma visão 360º para dar o apoio necessário a qualquer negócio. Pretendemos que quem confia em nós, apenas se preocupe com o core business da sua marca, nós iremos ser a ponte para tudo o resto."
                      }
                    </LongText>
                  </TextInAnimation>
                </div>
              </EaseInAnimation>
            ) : (
              <EaseInAnimation key={"values"}>
                <div className="values-info">
                  <div className="header-value heart-beat">
                    <SubTitleText variant="h3" sx={{ color: "white" }}>
                      VALORES
                    </SubTitleText>
                    <img
                      src={values}
                      className="about remarkable"
                      alt="Remarkable about"
                    />
                  </div>
                  <TextInAnimation>
                    <LongText className="text-value">
                      {
                        "Os nossos valores moldam cada interação, cada estratégia e cada trabalho que entregamos, somos movidos pela ânsia de inovar, pela transparencia em quem confia em nós e pela orientação de resultados."
                      }
                    </LongText>
                  </TextInAnimation>
                </div>
              </EaseInAnimation>
            )}
            <div>
              <button onClick={handleSelectPrevious} className="arrow">
                <KeyboardDoubleArrowRightIcon fontSize="large" />
              </button>
            </div>
          </Box>
        </Box>
      </div>
      <Contacts />
    </div>
  );
};

About.proptypes = {};

export default About;
