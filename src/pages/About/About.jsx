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
      <Box className="upper-container">
        <TitleText className="header-text" variant="h1">A NOSSA HISTÓRIA</TitleText>
        <LongText className="long-text" variant="h5">
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
        <Box className="values-box-container">
          <Box className="values-box">
            <TitleText variant="h3" sx={{ color: "black" }}>
              MISSÃO
            </TitleText>
            <img
              src={mission}
              className="about remarkable"
              alt="Remarkable about"
            />
            <h4 style={{ color: "black" }}>
              {"Fazer parte do crescimento e mudança dos nossos Clientes/Parceiros. Com a nossa visão 360 nos negócios, queremos acrescentar valor ao mercado e as empresas que confiam em nós diariamente. Somos a ponte que conecta diretores a colaboradores e empresas a pessoas, não somos só uma agência de Marketing, somos o seu Departamento de Marketing, capacitados a tornar a sua empresa notável, aplicando estratégias que irão não só melhorar a sua presença e posição no mercado, como também o espirito de equipa e o amor á camisola dos seus colaboradores."}
            </h4>
          </Box>
          <Box className="values-box">
            <TitleText variant="h3" sx={{ color: "black" }}>
              VISÃO
            </TitleText>
            <img
              src={vision}
              className="about remarkable"
              alt="Remarkable about"
            />
            <h4 style={{ color: "black" }}>
              {"A nossa visão passa por nos tornarmos um parceiro de negócio das empresas/marcas que precisem de revolucionar o mercado, entregando um serviço com uma visão 360º para dar o apoio necessário a qualquer negócio. Pretendemos que quem confia em nós, apenas se preocupe com o core business da sua marca, nós iremos ser a ponte para tudo o resto."}
            </h4>
          </Box>
          <Box className="values-box">
            <TitleText variant="h3" sx={{ color: "black" }}>
              VALORES
            </TitleText>
            <img
              src={values}
              className="about remarkable"
              alt="Remarkable about"
            />
            <h4 style={{ color: "black" }}>
              {"Os nossos valores moldam cada interação, cada estratégia e cada trabalho que entregamos, somos movidos pela ânsia de inovar, pela transparencia em quem confia em nós e pela orientação de resultados."}
            </h4>
          </Box>
        </Box>
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
