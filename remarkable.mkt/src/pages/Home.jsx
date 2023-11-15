import PropTypes from "prop-types";
import letteringLogo from "./../assets/letteringLogo.svg";
import { remarkableRed } from "./../utils/colors";
import FeedbackCard from "../components/FeedbackCard";
import { Box, Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";

const Button = styled(MuiButton)((props) => ({
  "&:hover": {
    backgroundColor: "green",
  },
}));

const Home = ({}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "inline-flex", backgroundColor: "black" }}>
        <a href="https://instagram.com/remarkable.mkt" target="_blank">
          <img
            src={letteringLogo}
            className="logo remarkable"
            alt="Remarkable logo"
          />
        </a>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <h1>TORNA-TE NOTÁVEL</h1>
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
        <Button
          className="button"
          sx={{
            marginLeft: 5,
            boxShadow: 3,
            color: "white",
            backgroundColor: remarkableRed,
          }}
        >
          Aqui
        </Button>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <h1>Contactos</h1>
        <Box display={"inline-flex"} alignItems={"center"}>
          <InstagramIcon />
          <h3 style={{ marginLeft: 5 }}>remarkable.mkt</h3>
        </Box>
      </div>
    </div>
  );
};

Home.protoTypes = {};

export default Home;
