import PropTypes from "prop-types";
import { remarkableRed } from "./../utils/colors";
import FeedbackCard from "../components/FeedbackCard";
import { Box, Button as MuiButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Contacts from "../components/Contacts";
import { LongText, TitleText } from "../utils/utils";
import aquiButton from "../assets/aquiButton.svg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const Button = styled(MuiButton)((props) => ({
  marginLeft: "2rem",
  boxShadow: 3,
  color: "white",
  backgroundColor: remarkableRed,
  "&:hover": {
    backgroundColor: "#f8b9b9",
  },
}));

const Home = ({}) => {
  const scrollLeft = (e) => {
    e.preventDefault();
    let scroll = document.querySelector(".card-scroller");
    scroll.scrollBy({
      top: 0,
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = (e) => {
    e.preventDefault();
    let scroll = document.querySelector(".card-scroller");
    scroll.scrollBy({
      top: 0,
      left: 350,
      behavior: "smooth",
    });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ margin: "0 15rem" }}>
        <TitleText variant="h1">TORNA-TE NOTÁVEL</TitleText>
        <LongText
          align="justify"
          variant="h5"
          margin="1rem"
          marginBottom="3rem"
        >
          Aqui viverá a descrição da empresa. Os nossos projetos, marcas,
          parcerias, etc... Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </LongText>
      </div>
      <div style={{ backgroundColor: remarkableRed, paddingBottom: "2rem" }}>
        <TitleText variant="h1" margin="1rem">
          Feedback
        </TitleText>
        <Box margin="0 6rem" display="inline-flex" alignItems="center">
          <div>
            <button onClick={scrollLeft} className="arrow">
              <KeyboardDoubleArrowLeftIcon fontSize="large" />
            </button>
          </div>
          <Box className="card-scroller">
            <FeedbackCard
              name={"Flávio Magalhães"}
              subtitle="Marca Pessoal - Fisioterapeuta"
              description={
                "A reMArkable foi um passo importantíssimo para impulsionar o meu negócio. O Marco é muito competente e estou bastante satisfeito com toda a dedicação e vontade demonstrada em querer ajudar-me. Os negócios crescem com pessoas assim!"
              }
              stars={5}
            />
            <FeedbackCard
              name={"Marco António"}
              subtitle="Empresa"
              description={
                "Criar a reMArkable foi importantíssimo para cumprir a minha missão no mundo"
              }
              stars={4}
            />
            <FeedbackCard
              name={"Pedro Maia"}
              subtitle="Empresa"
              description={"O meu irmão precisa de ajuda!! Alguém mande."}
              stars={2}
            />
            <FeedbackCard
              name={"Pedro Maia"}
              subtitle="Empresa"
              description={"O meu irmão precisa de ajuda!! Alguém mande."}
              stars={2}
            />
            <FeedbackCard
              last
              name={"Pedro Maia"}
              subtitle="Empresa"
              description={"O meu irmão precisa de ajuda!! Alguém mande."}
              stars={2}
            />
          </Box>
          <div>
            <button onClick={scrollRight} className="arrow">
              <KeyboardDoubleArrowRightIcon fontSize="large" />
            </button>
          </div>
        </Box>
      </div>
      <div
        style={{
          backgroundColor: "white",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TitleText variant="h2" margin="2rem" style={{ color: "black" }}>
          Entre em contacto:
        </TitleText>
        <a href="https://instagram.com/remarkable.mkt" target="_blank">
          <img src={aquiButton} className="aqui remarkable" alt="Aqui Button" />
        </a>
      </div>
      <Contacts />
    </div>
  );
};

Home.proptypes = {};

export default Home;
