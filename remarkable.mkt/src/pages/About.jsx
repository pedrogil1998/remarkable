import PropTypes from "prop-types";
import mission from "./../assets/mission.svg";
import vision from "./../assets/vision.svg";
import values from "./../assets/values.svg";
import { Box } from "@mui/material";
import Contacts from "../components/Contacts";

const About = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Box margin="0 15rem">
        <h1>A nossa história</h1>
        <h3>
          Aqui vamos contar um pedacinho da nossa história. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </h3>
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
            <img
              src={mission}
              className="about remarkable"
              alt="Remarkable about"
            />
            <p style={{ color: "black" }}>
              A nossa missão é ajudar-te a ti! Queremos que o teu negocio seja o
              negócio. Vamos ajudar-te a alcançar os teus objetivos.
            </p>
          </Box>
          <Box
            margin="2rem"
            maxWidth="350px"
            display="flex"
            flexDirection="column"
          >
            <img
              src={vision}
              className="about remarkable"
              alt="Remarkable about"
            />
            <p style={{ color: "black" }}>
              Somos uma empresa focada em empresas. O digital não é o futuro, é
              o presente. Connosco tem soluções 360.
            </p>
          </Box>
          <Box
            margin="2rem"
            maxWidth="350px"
            display="flex"
            flexDirection="column"
          >
            <img
              src={values}
              className="about remarkable"
              alt="Remarkable about"
            />
            <p style={{ color: "black" }}>
              Eticamente somos fortíssimos, leais, trabalhadores e
              perfecionistas. Queremos ter um impacto enorme no seu trabalho.
            </p>
          </Box>
        </Box>
      </div>
      <Contacts />
    </div>
  );
};

About.proptypes = {};

export default About;
