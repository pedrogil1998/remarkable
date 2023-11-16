import PropTypes from "prop-types";
import { remarkableRed } from "./../utils/colors";
import FeedbackCard from "../components/FeedbackCard";
import { Box, Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Contacts from "./Contacts";

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
      <div>
        <h1>TORNA-TE NOTÁVEL</h1>
        <h3>
          Aqui viverá a descrição da empresa. Os nossos projetos, marcas,
          parcerias, etc...
        </h3>
      </div>
      <div style={{ backgroundColor: remarkableRed }}>
        <h1>Feedback</h1>
        <Box sx={{ display: "inline-flex", margin: "2rem" }}>
          <FeedbackCard
            name={"Pedro Moura"}
            description={"A reMArkable foi crucial para lançar o meu negócio"}
          />
          <FeedbackCard
            name={"Marco António"}
            description={
              "Criar a reMArkable foi importantíssimo para cumprir a minha missão no mundo"
            }
          />
          <FeedbackCard
            last
            name={"Pedro Maia"}
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
