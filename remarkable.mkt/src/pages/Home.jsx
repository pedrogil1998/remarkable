import PropTypes from "prop-types";
import { remarkableRed } from "./../utils/colors";
import FeedbackCard from "../components/FeedbackCard";
import { Box, Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Contacts from "../components/Contacts";

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
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{margin: "0 15rem"}}>
        <h1>TORNA-TE NOTÁVEL</h1>
        <h3>
          Aqui viverá a descrição da empresa. Os nossos projetos, marcas,
          parcerias, etc... Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </h3>
      </div>
      <div style={{ backgroundColor: remarkableRed }}>
        <h1>Feedback</h1>
        <Box sx={{ display: "inline-flex", margin: "2rem" }}>
          <FeedbackCard
            name={"Flávio Magalhães"}
            subtitle="Marca Pessoal - Fisioterapeuta"
            description={
              "A reMArkable foi um passo importantíssimo para impulsionar o meu negócio. O Marco é muito competente e estou bastante satisfeito com toda a dedicação e vontade demonstrada em querer ajudar-me. Os negócios crescem com pessoas assim!"
            }
          />
          <FeedbackCard
            name={"Marco António"}
            subtitle="Empresa"
            description={
              "Criar a reMArkable foi importantíssimo para cumprir a minha missão no mundo"
            }
          />
          <FeedbackCard
            last
            name={"Pedro Maia"}
            subtitle="Empresa"
            description={"O meu irmão precisa de ajuda!! Alguém mande."}
          />
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
        <h1 style={{ color: "black" }}>Entre em contacto!</h1>
        <Button className="button">Aqui</Button>
      </div>
      <Contacts />
    </div>
  );
};

Home.proptypes = {};

export default Home;
